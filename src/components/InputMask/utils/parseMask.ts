import { defaultCharsRules, defaultMaskChar } from '../constants';

export interface MaskOptions {
    maskChar: string;
    charsRules: Record<string, string>;
    mask: string | null;
    prefix: string | null;
    lastEditablePos: number | null;
    permanents: number[];
}

export default function (mask?: string | null, maskChar?: string, charsRules?: Record<string, string>): MaskOptions {
    if (maskChar === undefined) {
        maskChar = defaultMaskChar;
    }

    if (charsRules == null) {
        charsRules = defaultCharsRules;
    }

    if (!mask || typeof mask !== 'string') {
        return {
            maskChar: maskChar,
            charsRules: charsRules,
            mask: null,
            prefix: null,
            lastEditablePos: null,
            permanents: []
        };
    }

    let str = '';
    let prefix = '';
    const permanents: number[] = [];
    let isPermanent = false;
    let lastEditablePos: number | null = null;
    mask.split('').forEach(function (character) {
        if (!isPermanent && character === '\\') {
            isPermanent = true;
        } else {
            if (isPermanent || !charsRules[character]) {
                permanents.push(str.length);

                if (str.length === permanents.length - 1) {
                    prefix += character;
                }
            } else {
                lastEditablePos = str.length + 1;
            }

            str += character;
            isPermanent = false;
        }
    });
    return {
        maskChar: maskChar,
        charsRules: charsRules,
        prefix: prefix,
        mask: str,
        lastEditablePos: lastEditablePos,
        permanents: permanents
    };
}