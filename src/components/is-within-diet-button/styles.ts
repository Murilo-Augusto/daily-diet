import styled, { css } from "styled-components/native";

interface ButtonProps {
	isWithinDiet?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;

	padding: 16px 0;
	max-height: 50px;
	border-radius: 6px;

	${({ theme, isWithinDiet }) => {
		switch (isWithinDiet) {
			case true:
				return css`
					background-color: ${theme.colors["green-light"]};
					border: 1px solid ${theme.colors["green-dark"]};
				`;
			case false:
				return css`
					background-color: ${theme.colors["red-light"]};
					border: 1px solid ${theme.colors["red-dark"]};
				`;
			default:
				return css`
					background-color: ${theme.colors["gray-200"]};
					border: 1px solid transparent;
				`;
		}
	}}
`;

interface IndicatorProps {
	indicatorColor: string;
}

export const Indicator = styled.View<IndicatorProps>`
	height: 8px;
	width: 8px;
	border-radius: 999px;
	background-color: ${({ indicatorColor }) => indicatorColor};
`;

export const ButtonText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-700"]};
	`}
`;
