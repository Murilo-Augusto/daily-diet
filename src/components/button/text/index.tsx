import { TextProps } from "react-native";
import { useContext } from "react";

import { ButtonContext } from "../container";

import { StyledText } from "./styles";

export interface ButtonTextProps extends TextProps {}

export function ButtonText(props: ButtonTextProps) {
	const { variant } = useContext(ButtonContext);

	return <StyledText variant={variant} {...props} />;
}
