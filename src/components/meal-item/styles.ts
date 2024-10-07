import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 12px;

	width: 100%;
	padding: 14px 12px;

	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.colors["gray-300"]};
`;

export const MealHour = styled.Text`
	${({ theme }) => css`
		color: ${theme.colors["gray-700"]};
		font-size: ${theme.font.size.xs}px;
		font-family: ${theme.font.family.bold};
	`}
`;

export const MealName = styled.Text.attrs({
	numberOfLines: 1,
})`
	flex: 1;
	${({ theme }) => css`
		color: ${theme.colors["gray-600"]};
		font-size: ${theme.font.size.base}px;
		font-family: ${theme.font.family.regular};
	`}
`;

export const Separator = styled.View`
	height: 14px;
	width: 1px;
	background-color: ${({ theme }) => theme.colors["gray-400"]};
`;

interface MealStatusProps {
	isWithinDiet: boolean;
}

export const MealStatus = styled.View<MealStatusProps>`
	width: 14px;
	height: 14px;
	border-radius: 999px;
	background-color: ${({ theme, isWithinDiet }) =>
		isWithinDiet ? theme.colors["green-mid"] : theme.colors["red-mid"]};
`;
