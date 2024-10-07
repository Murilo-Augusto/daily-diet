import { forwardRef } from "react";
import { TextInput, TextInputProps, ViewStyle } from "react-native";

import { Container, Label, StyledInput } from "./styles";

export interface InputProps extends TextInputProps {
	label: string;
	contentContainerStyle?: ViewStyle;
}

export const Input = forwardRef<TextInput, InputProps>(
	({ label, contentContainerStyle, ...rest }, ref) => {
		return (
			<Container style={contentContainerStyle}>
				<Label>{label}</Label>
				<StyledInput {...rest} ref={ref} />
			</Container>
		);
	}
);
