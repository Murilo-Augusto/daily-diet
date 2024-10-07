import { Link } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import styled, { css } from "styled-components/native";

interface MealProps {
	isWithinDiet: boolean;
}

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View<MealProps>`
	position: relative;
	padding: 56px 24px;
	height: 132px;
	width: 100%;

	flex-direction: row;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme, isWithinDiet }) =>
		isWithinDiet ? theme.colors["green-light"] : theme.colors["red-light"]};
`;

export const ButtonBack = styled(Link)`
	position: absolute;
	left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 24,
	color: theme.colors["gray-600"],
}))``;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.lg}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
	line-height: 20px;
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

export const Infos = styled.View`
	flex: 1;
	gap: 24px;
`;

export const Wrapper = styled.View`
	gap: 8px;
`;

export const MealName = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size["3xl"]}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
`;

export const MealInfo = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.base}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-600"]};
	`}
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.lg}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-600"]};
	`}
`;

export const Tag = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	gap: 8px;
	padding: 8px 16px;
	border-radius: 999px;
	background-color: ${({ theme }) => theme.colors["gray-200"]};
`;

export const Status = styled.View<MealProps>`
	height: 8px;
	width: 8px;
	border-radius: 999px;
	background-color: ${({ theme, isWithinDiet }) =>
		isWithinDiet ? theme.colors["green-dark"] : theme.colors["red-dark"]};
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;
	gap: 12px;
	justify-content: center;
`;

export const Footer = styled.View`
	gap: 8px;
`;
