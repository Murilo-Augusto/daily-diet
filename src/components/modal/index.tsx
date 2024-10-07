import { KeyboardAvoidingView, ModalProps as RNModalProps } from "react-native";
import { Container, Content, Overlay, Text, Wrapper } from "./styles";

export interface ModalProps extends RNModalProps {
	text: string;
}

export function Modal({ text, onRequestClose, children, ...rest }: ModalProps) {
	return (
		<Container onRequestClose={onRequestClose} {...rest}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<Wrapper>
					<Overlay onPress={onRequestClose} />
					<Content>
						<Text>{text}</Text>
						{children}
					</Content>
				</Wrapper>
			</KeyboardAvoidingView>
		</Container>
	);
}
