import { createContext, forwardRef } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ButtonVariant } from "..";
import { Container } from "./styles";

interface ButtonContextValue {
	variant: ButtonVariant;
}

export const ButtonContext = createContext({} as ButtonContextValue);

export interface ButtonContainerProps extends TouchableOpacityProps {
	variant?: ButtonVariant;
}

export const ButtonContainer = forwardRef<
	TouchableOpacity,
	ButtonContainerProps
>(({ variant = "normal", disabled, children, ...rest }, ref) => {
	return (
		<ButtonContext.Provider value={{ variant }}>
			<Container variant={variant} disabled={disabled} ref={ref} {...rest}>
				{children}
			</Container>
		</ButtonContext.Provider>
	);
});
