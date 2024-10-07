import { Link } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	position: relative;
	padding: 56px 24px;
	height: 132px;
	width: 100%;

	flex-direction: row;

	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors["gray-300"]};
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

export const Form = styled.ScrollView.attrs({
	contentContainerStyle: {
		gap: 24,
	},
})`
	flex: 1;
`;

export const Field = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 16px;

	width: 100%;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.sm}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-600"]};
	`}
`;
