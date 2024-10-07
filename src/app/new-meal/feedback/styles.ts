import styled, { css } from "styled-components/native";

interface FeedbackProps {
	isWithinDiet: boolean;
}

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	gap: 40px;

	padding: 24px;

	background-color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const TextContainer = styled.View`
	gap: 8px;
`;

export const FeedbackTitle = styled.Text<FeedbackProps>`
	${({ theme, isWithinDiet }) => css`
		font-size: ${theme.font.size["3xl"]}px;
		font-family: ${theme.font.family.bold};
		color: ${isWithinDiet
			? theme.colors["green-dark"]
			: theme.colors["red-dark"]};
	`}
	text-align: center;
`;

export const FeedbackText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size["lg"]}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-700"]};
	`}
	text-align: center;
`;

export const FeedbackTextStrong = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.font.family.bold};
	`}
`;
