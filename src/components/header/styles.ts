import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
	width: 100%;
	padding: 24px 0;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.colors["gray-100"]};
`;

export const Logo = styled.Image`
	width: 82px;
	height: 37px;
`;

export const ProfileImage = styled.Image`
	width: 38px;
	height: 38px;

	border: 2px solid ${({ theme }) => theme.colors["gray-600"]};
	border-radius: 999px;
`;
