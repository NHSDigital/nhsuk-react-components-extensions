import React, { HTMLProps } from "react";
import classNames from "classnames";
import { FormElementProps } from "./LocalFormTypes";
import { InputWidth } from "nhsuk-react-components/dist/esm/util/types/NHSUKTypes";
import FormGroup from "./LocalFormGroup";
import {InputMask} from '@react-input/mask';

type NativeInputProps = Omit<HTMLProps<HTMLInputElement>, "ref">;

export type MaskedInputProps = NativeInputProps &
	FormElementProps & {
		width?: InputWidth;
		mask: string;
		maskChar?: string;
		formatChars?: Record<string, string>;
		alwaysShowMask?: boolean;
		inputRef?: React.Ref<HTMLInputElement>;
		className: string;
	};

function setRefs<T>(node: T, ...refs: Array<React.Ref<T> | undefined>) {
	for (const ref of refs) {
		if (!ref) continue;
		if (typeof ref === "function") ref(node);
		else (ref as React.MutableRefObject<T | null>).current = node;
	}
}

function toReplacement(
	map?: Record<string, string>
): Record<string, RegExp> | undefined {
	if (!map) return undefined;
	return Object.fromEntries(
		Object.entries(map).map(([token, pattern]) => {
			const src =
				pattern.startsWith("/") && pattern.endsWith("/")
					? pattern.slice(1, -1)
					: pattern;
			return [token, new RegExp(src)];
		})
	);
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
	(
		{
			className,
			width,
			error,
			mask,
			maskChar = "",
			formatChars,
			alwaysShowMask,
			inputRef,
			type = "text",
			...rest
		},
		ref
	) => {
		const showMask =
			typeof alwaysShowMask === "boolean" ? alwaysShowMask : maskChar !== "";
		const replacement = toReplacement(formatChars);

		return (
			<FormGroup<MaskedInputProps>
				inputType="input"
				className={className}
				width={width}
				error={error}
				{...rest}
			>
				{({
					className: fgClass,
					width: fgWidth,
					error: fgError,
					ref: _ignored,
					...native
				}) => (
					<InputMask
						{...native}
						mask={mask}
						replacement={replacement}
						showMask={showMask}
						type={type}
						aria-invalid={fgError ? true : undefined}
						className={classNames(
							"nhsuk-input",
							{ [`nhsuk-input--width-${fgWidth}`]: fgWidth },
							{ "nhsuk-input--error": fgError },
							className,
							fgClass
						)}
						ref={(node) => setRefs(node, ref, inputRef)}
					/>
				)}
			</FormGroup>
		);
	}
);

MaskedInput.displayName = "MaskedInput";


export default MaskedInput;