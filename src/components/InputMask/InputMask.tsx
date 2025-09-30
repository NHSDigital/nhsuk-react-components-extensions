import React, { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import parseMask from './utils/parseMask';
import { isAndroidBrowser, isWindowsPhoneBrowser, isAndroidFirefox } from './utils/environment';
import { clearRange, formatValue, getFilledLength, isEmpty, isPermanentChar, getInsertStringLength, insertString } from './utils/string';
import defer from './utils/defer';
import { TextInput, TextInputProps } from 'nhsuk-react-components';

export interface InputMaskProps extends Omit<TextInputProps, 'onChange' | 'value' | 'defaultValue'> {
    mask?: string;
    maskChar?: string;
    formatChars?: Record<string, string>;
    alwaysShowMask?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    value?: string | null;
    defaultValue?: string | null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputElement: React.FC<InputMaskProps> = ({
    mask,
    maskChar,
    formatChars,
    defaultValue = '',
    value,
    alwaysShowMask = false,
    inputRef,
    disabled = false,
    readOnly,
    onChange,
    onKeyDown,
    onPaste,
    onMouseDown,
    onFocus,
    onBlur,
    ...props
}) => {
    const inputElRef = useRef<HTMLInputElement>(null);
    const [internalValue, setInternalValue] = useState('');
    const lastCursorPos = useRef<number | null>(null);
    const focused = useRef<boolean>(false);
    const backspaceOrDeleteRemoval = useRef<{
        key: string;
        selection: { start: number; end: number; length: number };
    } | null>(null);
    const beforePasteState = useRef<{
        value: string;
        selection: { start: number; end: number; length: number };
    } | null>(null);
    const isAndroidBrowserRef = useRef<boolean>(false);
    const isWindowsPhoneBrowserRef = useRef<boolean>(false);
    const isAndroidFirefoxRef = useRef<boolean>(false);
    const mouseDownX = useRef<number>(0);
    const mouseDownY = useRef<number>(0);
    const mouseDownTime = useRef<number>(0);

    const hasValue = value != null;
    const maskOptions = useMemo(() => parseMask(mask, maskChar, formatChars), [mask, maskChar, formatChars]);

    const getStringValue = useCallback((val: unknown): string => {
        return !val && val !== 0 ? '' : val + '';
    }, []);

    const isDOMElement = useCallback((element: unknown): element is HTMLElement => {
        return (typeof HTMLElement === 'object')
            ? element instanceof HTMLElement
            : typeof element === 'object' && element !== null && 'nodeType' in element &&
            (element as { nodeType: number }).nodeType === 1 &&
            'nodeName' in element && typeof (element as { nodeName: unknown }).nodeName === 'string';
    }, []);

    const getInputDOMNode = useCallback((): HTMLInputElement | null => {
        const input = inputElRef.current;
        if (!input) return null;
        return isDOMElement(input) ? input : null;
    }, [isDOMElement]);

    const getInputValue = useCallback((): string | null => {
        const input = getInputDOMNode();
        return input ? input.value : null;
    }, [getInputDOMNode]);

    const setInputValue = useCallback((val: string): void => {
        const input = getInputDOMNode();
        if (!input) return;
        setInternalValue(val);
        input.value = val;
    }, [getInputDOMNode]);

    const getLeftEditablePos = useCallback((pos: number): number | null => {
        for (let i = pos; i >= 0; --i) {
            if (!isPermanentChar(maskOptions, i)) {
                return i;
            }
        }
        return null;
    }, [maskOptions]);

    const getRightEditablePos = useCallback((pos: number): number | null => {
        const maskStr = maskOptions.mask;
        if (!maskStr) return null;

        for (let i = pos; i < maskStr.length; ++i) {
            if (!isPermanentChar(maskOptions, i)) {
                return i;
            }
        }
        return null;
    }, [maskOptions]);

    const setSelection = useCallback((start: number, len: number = 0): void => {
        const input = getInputDOMNode();
        if (!input) return;

        const end = start + len;

        if ('selectionStart' in input && 'selectionEnd' in input) {
            input.selectionStart = start;
            input.selectionEnd = end;
        } else {
            // Legacy IE support
            const inputWithRange = input as HTMLInputElement & {
                createTextRange?: () => {
                    collapse: (toStart: boolean) => void;
                    moveStart: (unit: string, count: number) => void;
                    moveEnd: (unit: string, count: number) => void;
                    select: () => void;
                }
            };
            if (inputWithRange.createTextRange) {
                const range = inputWithRange.createTextRange();
                range.collapse(true);
                range.moveStart('character', start);
                range.moveEnd('character', end - start);
                range.select();
            }
        }
    }, [getInputDOMNode]);

    const setCursorToEnd = useCallback((): void => {
        const filledLen = getFilledLength(maskOptions, internalValue);
        const pos = getRightEditablePos(filledLen);

        if (pos !== null) {
            setSelection(pos, 0);
            defer(() => {
                setSelection(pos, 0);
            });
            lastCursorPos.current = pos;
        }
    }, [maskOptions, internalValue, getRightEditablePos, setSelection]);


    const getSelection = useCallback(() => {
        const input = getInputDOMNode();
        let start = 0;
        let end = 0;

        if (input && 'selectionStart' in input && 'selectionEnd' in input) {
            start = input.selectionStart || 0;
            end = input.selectionEnd || 0;
        } else if (input) {
            // Legacy IE support
            const docWithSelection = document as Document & {
                selection?: {
                    createRange: () => {
                        parentElement: () => Element;
                        moveStart: (unit: string, count: number) => number;
                        moveEnd: (unit: string, count: number) => number;
                    };
                };
            };
            if (docWithSelection.selection) {
                const range = docWithSelection.selection.createRange();
                if (range && range.parentElement() === input && 'value' in input && (input as any).value) {
                    start = -range.moveStart('character', -(input as any).value.length);
                    end = -range.moveEnd('character', -(input as any).value.length);
                }
            }
        }

        return {
            start,
            end,
            length: end - start
        };
    }, [getInputDOMNode]);


    const setCursorPos = useCallback((pos: number): void => {
        setSelection(pos, 0);
        defer(() => {
            setSelection(pos, 0);
        });
        lastCursorPos.current = pos;
    }, [setSelection]);

    const isFocused = useCallback((): boolean => {
        return focused.current;
    }, []);

    // Initialize value
    useEffect(() => {
        let initialValue = hasValue ? getStringValue(value) : defaultValue || '';

        if (maskOptions.mask && (alwaysShowMask || initialValue)) {
            initialValue = formatValue(maskOptions, initialValue);
        }

        setInternalValue(initialValue);
    }, [mask, maskChar, formatChars, value, defaultValue, alwaysShowMask, hasValue, getStringValue]);

    // Mount effect
    useEffect(() => {
        isAndroidBrowserRef.current = isAndroidBrowser();
        isWindowsPhoneBrowserRef.current = isWindowsPhoneBrowser();
        isAndroidFirefoxRef.current = isAndroidFirefox();

        if (maskOptions.mask && getInputValue() !== internalValue) {
            setInputValue(internalValue);
        }
    }, [maskOptions.mask, getInputValue, internalValue, setInputValue]);

    // Update effect
    useEffect(() => {
        if (maskOptions.mask && getInputValue() !== internalValue) {
            setInputValue(internalValue);
        }
    }, [maskOptions.mask, getInputValue, internalValue, setInputValue]);

    // Props change effect
    useEffect(() => {
        if (!maskOptions.mask) {
            backspaceOrDeleteRemoval.current = null;
            lastCursorPos.current = null;
            return;
        }

        const showEmpty = alwaysShowMask || isFocused();
        let newValue = hasValue ? getStringValue(value) : internalValue;

        if (maskOptions.mask && (newValue || showEmpty)) {
            newValue = formatValue(maskOptions, newValue);
        }

        if (maskOptions.mask && isEmpty(maskOptions, newValue) && !showEmpty && (!hasValue || !value)) {
            newValue = '';
        }

        if (newValue !== internalValue) {
            setInternalValue(newValue);
        }
    }, [mask, maskChar, formatChars, value, alwaysShowMask, hasValue, getStringValue, isFocused]);

    const pasteText = useCallback((val: string, text: string, selection: { start: number; length: number }, event: React.ChangeEvent<HTMLInputElement>): void => {
        let cursorPos = selection.start;

        if (selection.length) {
            val = clearRange(maskOptions, val, cursorPos, selection.length);
        }

        const textLen = getInsertStringLength(maskOptions, val, text, cursorPos);
        val = insertString(maskOptions, val, text, cursorPos);
        cursorPos += textLen;
        cursorPos = getRightEditablePos(cursorPos) || cursorPos;

        setInputValue(val);

        if (event && onChange) {
            onChange(event);
        }

        setCursorPos(cursorPos);
    }, [maskOptions, getRightEditablePos, setInputValue, onChange, setCursorPos]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>): void => {
        backspaceOrDeleteRemoval.current = null;

        if (onKeyDown) {
            onKeyDown(event);
        }

        const { key, ctrlKey, metaKey, defaultPrevented } = event;

        if (ctrlKey || metaKey || defaultPrevented) {
            return;
        }

        if (key === 'Backspace' || key === 'Delete') {
            const selection = getSelection();
            const canRemove = (key === 'Backspace' && selection.end > 0) ||
                (key === 'Delete' && internalValue.length > selection.start);

            if (!canRemove) {
                return;
            }

            backspaceOrDeleteRemoval.current = {
                key,
                selection: getSelection()
            };
        }
    }, [onKeyDown, getSelection, internalValue]);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        const beforePaste = beforePasteState.current;
        const { mask: maskStr, maskChar: maskCharacter, lastEditablePos, prefix } = maskOptions;

        const inputValue = getInputValue();
        if (!inputValue || !maskStr) return;

        if (beforePaste) {
            beforePasteState.current = null;
            pasteText(beforePaste.value, inputValue, beforePaste.selection, event);
            return;
        }

        const oldValue = internalValue;
        let value = inputValue;
        const input = getInputDOMNode();

        // Handle autofill
        try {
            if (input && typeof input.matches === 'function' && input.matches(':-webkit-autofill')) {
                // Treat autofill as complete replacement
            }
        } catch {
            // Ignore matches errors
        }

        const selection = getSelection();
        let cursorPos = selection.end;
        const maskLen = maskStr.length;
        const valueLen = value.length;
        const oldValueLen = oldValue.length;
        const prefixLength = prefix?.length || 0;
        const lastEditablePosValue = lastEditablePos || 0;
        let clearedValue: string;
        let enteredString: string;

        if (backspaceOrDeleteRemoval.current) {
            const deleteFromRight = backspaceOrDeleteRemoval.current.key === 'Delete';
            value = internalValue;
            const removalSelection = backspaceOrDeleteRemoval.current.selection;
            cursorPos = removalSelection.start;
            backspaceOrDeleteRemoval.current = null;

            if (removalSelection.length) {
                value = clearRange(maskOptions, value, removalSelection.start, removalSelection.length);
            } else if (removalSelection.start < prefixLength || (!deleteFromRight && removalSelection.start === prefixLength)) {
                cursorPos = prefixLength;
            } else {
                const editablePos = deleteFromRight
                    ? getRightEditablePos(cursorPos)
                    : getLeftEditablePos(cursorPos - 1);

                if (editablePos !== null) {
                    if (!maskCharacter) {
                        value = value.substring(0, getFilledLength(maskOptions, value));
                    }
                    value = clearRange(maskOptions, value, editablePos, 1);
                    cursorPos = editablePos;
                }
            }
        } else if (valueLen > oldValueLen) {
            const enteredStringLen = valueLen - oldValueLen;
            const startPos = selection.end - enteredStringLen;
            enteredString = value.substring(startPos, startPos + enteredStringLen);

            if (startPos < lastEditablePosValue && (enteredStringLen !== 1 || enteredString !== maskStr[startPos])) {
                cursorPos = getRightEditablePos(startPos) || startPos;
            } else {
                cursorPos = startPos;
            }

            value = value.substring(0, startPos) + value.substring(startPos + enteredStringLen);
            clearedValue = clearRange(maskOptions, value, startPos, maskLen - startPos);
            clearedValue = insertString(maskOptions, clearedValue, enteredString, cursorPos);
            value = insertString(maskOptions, oldValue, enteredString, cursorPos);

            if (enteredStringLen !== 1 || (cursorPos >= prefixLength && cursorPos < lastEditablePosValue)) {
                cursorPos = Math.max(getFilledLength(maskOptions, clearedValue), cursorPos);
                if (cursorPos < lastEditablePosValue) {
                    cursorPos = getRightEditablePos(cursorPos) || cursorPos;
                }
            } else if (cursorPos < lastEditablePosValue) {
                cursorPos++;
            }
        } else if (valueLen < oldValueLen) {
            const removedLen = maskLen - valueLen;
            enteredString = value.substring(0, selection.end);
            const clearOnly = enteredString === oldValue.substring(0, selection.end);
            clearedValue = clearRange(maskOptions, oldValue, selection.end, removedLen);

            if (maskCharacter) {
                value = insertString(maskOptions, clearedValue, enteredString, 0);
            }

            clearedValue = clearRange(maskOptions, clearedValue, selection.end, maskLen - selection.end);
            clearedValue = insertString(maskOptions, clearedValue, enteredString, 0);

            if (!clearOnly) {
                cursorPos = Math.max(getFilledLength(maskOptions, clearedValue), cursorPos);
                if (cursorPos < lastEditablePosValue) {
                    cursorPos = getRightEditablePos(cursorPos) || cursorPos;
                }
            } else if (cursorPos < prefixLength) {
                cursorPos = prefixLength;
            }
        }

        value = formatValue(maskOptions, value);
        setInputValue(value);

        if (onChange) {
            onChange(event);
        }

        if (isWindowsPhoneBrowserRef.current) {
            defer(() => {
                setSelection(cursorPos, 0);
            });
        } else {
            setCursorPos(cursorPos);
        }
    }, [maskOptions, getInputValue, internalValue, getInputDOMNode, getSelection, pasteText, getRightEditablePos, getLeftEditablePos, setInputValue, onChange, setSelection, setCursorPos]);

    const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>): void => {
        focused.current = true;

        if (maskOptions.mask) {
            if (!internalValue) {
                const { prefix } = maskOptions;
                const value = formatValue(maskOptions, prefix || '');
                const inputValue = formatValue(maskOptions, value);

                const isInputValueChanged = inputValue !== event.target.value;

                if (isInputValueChanged) {
                    event.target.value = inputValue;
                }

                setInternalValue(inputValue);

                if (isInputValueChanged && onChange) {
                    onChange(event as React.ChangeEvent<HTMLInputElement>);
                }

                setCursorToEnd();
            } else if (getFilledLength(maskOptions, internalValue) < maskOptions.mask.length) {
                setCursorToEnd();
            }
        }

        if (onFocus) {
            onFocus(event);
        }
    }, [maskOptions, internalValue, onChange, setCursorToEnd, onFocus]);

    const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>): void => {
        focused.current = false;

        if (maskOptions.mask && !alwaysShowMask && isEmpty(maskOptions, internalValue)) {
            const inputValue = '';
            const isInputValueChanged = inputValue !== getInputValue();

            if (isInputValueChanged) {
                setInputValue(inputValue);
            }

            if (isInputValueChanged && onChange) {
                onChange(event as React.ChangeEvent<HTMLInputElement>);
            }
        }

        if (onBlur) {
            onBlur(event);
        }
    }, [maskOptions, alwaysShowMask, internalValue, getInputValue, setInputValue, onChange, onBlur]);

    const handleMouseDown = useCallback((event: React.MouseEvent<HTMLInputElement>): void => {
        if (!focused.current && document.addEventListener) {
            mouseDownX.current = event.clientX;
            mouseDownY.current = event.clientY;
            mouseDownTime.current = new Date().getTime();

            const mouseUpHandler = (mouseUpEvent: MouseEvent) => {
                document.removeEventListener('mouseup', mouseUpHandler);

                if (!focused.current) {
                    return;
                }

                const deltaX = Math.abs(mouseUpEvent.clientX - mouseDownX.current);
                const deltaY = Math.abs(mouseUpEvent.clientY - mouseDownY.current);
                const axisDelta = Math.max(deltaX, deltaY);
                const timeDelta = new Date().getTime() - mouseDownTime.current;

                if ((axisDelta <= 10 && timeDelta <= 200) || (axisDelta <= 5 && timeDelta <= 300)) {
                    setCursorToEnd();
                }
            };

            document.addEventListener('mouseup', mouseUpHandler);
        }

        if (onMouseDown) {
            onMouseDown(event);
        }
    }, [setCursorToEnd, onMouseDown]);

    const handlePaste = useCallback((event: React.ClipboardEvent<HTMLInputElement>): void => {
        if (onPaste) {
            onPaste(event);
        }

        if (!event.defaultPrevented) {
            const inputValue = getInputValue();
            if (inputValue !== null) {
                beforePasteState.current = {
                    value: inputValue,
                    selection: getSelection()
                };
                setInputValue('');
            }
        }
    }, [onPaste, getInputValue, getSelection, setInputValue]);

    const handleRef = useCallback((ref: HTMLInputElement | null) => {
        if (inputElRef) {
            inputElRef.current = ref;
        }

        if (inputRef) {
            if (typeof inputRef === 'function') {
                inputRef(ref);
            } else if (inputRef && 'current' in inputRef) {
                const refObj = inputRef as { current: HTMLInputElement | null };
                refObj.current = ref;
            }
        }
    }, [inputRef]);

    const inputProps: TextInputProps = {
        ...props,
        onFocus: handleFocus,
        onBlur: handleBlur
    };

    if (maskOptions.mask) {
        if (!disabled && !readOnly) {
            inputProps.onChange = handleChange;
            inputProps.onKeyDown = handleKeyDown;
            inputProps.onPaste = handlePaste;
            inputProps.onMouseDown = handleMouseDown;
        }
    }

    if (maskOptions.mask && hasValue) {
        inputProps.value = internalValue;
    }

    return <TextInput ref={handleRef} {...inputProps} />;
};

export default InputElement;