import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Overlay = styled.Pressable`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.25);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const Container = styled.Modal.attrs({
	statusBarTranslucent: true,
	transparent: true,
	animationType: "fade",
})``;

export const Wrapper = styled(SafeAreaView)`
	justify-content: center;
	align-items: center;

	flex: 1;
`;

export const Text = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.font.size.lg}px;
		font-family: ${theme.font.family.bold};
		color: ${theme.colors["gray-600"]};
	`}
	text-align: center;
`;

export const Content = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		gap: 24,
		padding: 24,
	},
})`
	margin-top: ${Platform.OS === "ios" ? 24 : 0}px;
	flex-grow: 0;

	background-color: ${({ theme }) => theme.colors["gray-100"]};
	border-radius: 6px;
	width: 100%;
	max-width: 320px;
`;
