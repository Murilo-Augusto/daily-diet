import { Platform, TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
	gap: 4px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-600"]};
	`}
`;

export const StyledInput = styled(TextInput).attrs(({ theme }) => ({
	cursorColor: theme.colors["gray-700"],
	selectionColor: Platform.OS === "ios" ? theme.colors["gray-700"] : undefined,
}))`
	min-height: 50px;
	border-radius: 6px;
	padding: 14px;

	${({ theme }) => css`
		font-size: ${theme.font.size.base}px;
		font-family: ${theme.font.family.regular};
		color: ${theme.colors["gray-700"]};
		border: 1px solid ${theme.colors["gray-300"]};
	`}
`;
