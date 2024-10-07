import { ButtonContainer } from "./container";
import { ButtonIcon } from "./icon";
import { ButtonText } from "./text";

export const Button = {
	Container: ButtonContainer,
	Text: ButtonText,
	Icon: ButtonIcon,
};

export type ButtonVariant = "normal" | "outline";
