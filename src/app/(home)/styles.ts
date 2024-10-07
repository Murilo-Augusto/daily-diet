import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	gap: 24px;
	padding: 0 24px 24px 24px;
	background-color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const Meals = styled.View`
	flex: 1;
	gap: 32px;
`;

export const NewMeal = styled.View`
	gap: 8px;
`;

export const TitleSection = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.base}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-700"]};
	`}
`;

export const DateSection = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.lg}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
`;
