import { ArrowLeft } from "lucide-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

interface PercentageProps {
	isWithinDiet: boolean;
}

export const Percentage = styled.View<PercentageProps>`
	padding: 56px 24px;
	height: 200px;
	width: 100%;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme, isWithinDiet }) =>
		isWithinDiet ? theme.colors["green-light"] : theme.colors["red-light"]};
`;

export const BackIcon = styled(ArrowLeft).attrs({
	size: 24,
})``;

export const PercentageText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size["3xl"]}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
	text-align: center;
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-600"]};
	`}
	text-align: center;
`;

export const Content = styled.View`
	flex: 1;
	gap: 24px;
	margin-top: -22px;
	padding: 32px 24px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	background-color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const ContentTitle = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
	text-align: center;
`;

export const Data = styled.View`
	flex: 1;
	gap: 12px;
`;

export const Box = styled.View`
	flex: 1;
	max-height: 90px;
	min-height: 90px;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 16px;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.colors["gray-200"]};
`;

export const BoldText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size["2xl"]}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
	text-align: center;
`;

export const RegularText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-600"]};
	`}
	text-align: center;
`;

export const MealBoxWithinDiet = styled.View`
	flex: 1;
	max-height: 110px;
	min-height: 110px;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 16px;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.colors["green-light"]};
`;

export const MealBoxOutsideDiet = styled.View`
	flex: 1;
	max-height: 110px;
	min-height: 110px;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 16px;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.colors["red-light"]};
`;
