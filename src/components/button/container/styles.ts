import styled, { css } from "styled-components/native";
import { ButtonVariant } from "..";

interface ContainerProps {
	variant: ButtonVariant;
}

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})<ContainerProps>`
	flex-direction: row;
	gap: 12px;
	align-items: center;
	justify-content: center;

	padding: 16px;
	border-radius: 6px;

	${({ theme, variant }) => css`
		background-color: ${variant === "normal"
			? theme.colors["gray-600"]
			: "transparent"};
		border: 1px solid
			${variant === "normal" ? "transparent" : theme.colors["gray-700"]};
	`}
`;
