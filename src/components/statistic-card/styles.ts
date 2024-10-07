import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "lucide-react-native";

interface ContainerProps {
	isWithinDiet: boolean;
}

export const Container = styled.TouchableOpacity.attrs<ContainerProps>({
	activeOpacity: 0.7,
})`
	width: 100%;
	height: 102px;
	border-radius: 8px;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme, isWithinDiet }) =>
		isWithinDiet ? theme.colors["green-light"] : theme.colors["red-light"]};
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
	size: 24,
}))`
	position: absolute;
	top: 8px;
	right: 8px;
`;

export const Percentage = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size["3xl"]}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-600"]};
	`}
`;
