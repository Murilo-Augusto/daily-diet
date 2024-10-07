import styled, { css } from "styled-components/native";
import { ButtonVariant } from "..";

interface StyledTextProps {
	variant: ButtonVariant;
}

export const StyledText = styled.Text<StyledTextProps>`
	${({ theme, variant }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.bold};
		color: ${variant === "normal"
			? theme.colors.white
			: theme.colors["gray-700"]};
	`}
`;
