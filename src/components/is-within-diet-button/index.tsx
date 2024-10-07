import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container, Indicator } from "./styles";

export interface OptionsButtonProps extends TouchableOpacityProps {
	text: string;
	isWithinDiet?: boolean;
	indicatorColor: string;
}

export function IsWithinDietButton({
	text,
	indicatorColor,
	isWithinDiet,
	...rest
}: OptionsButtonProps) {
	return (
		<Container isWithinDiet={isWithinDiet} {...rest}>
			<Indicator indicatorColor={indicatorColor} />
			<ButtonText>{text}</ButtonText>
		</Container>
	);
}
