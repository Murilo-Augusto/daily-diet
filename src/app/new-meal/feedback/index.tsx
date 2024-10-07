import { Image } from "react-native";

import illustrationInsideDiet from "@/assets/illustration-inside-diet.png";
import illustrationOfDiet from "@/assets/illustration-off-diet.png";

import {
	Container,
	FeedbackText,
	FeedbackTextStrong,
	FeedbackTitle,
	TextContainer,
} from "./styles";
import { Button } from "@/components/button";
import { Link } from "expo-router";
import { useFeedbackPageParams } from "./hooks/use-feedback-page-params";

export default function FeedbackPage() {
	const params = useFeedbackPageParams();

	const isWithinDiet = params.isWithinDiet.toLowerCase() === "true";

	return (
		<Container>
			<TextContainer>
				<FeedbackTitle isWithinDiet={isWithinDiet}>
					{isWithinDiet ? "Continue assim!" : "Que pena!"}
				</FeedbackTitle>

				{isWithinDiet ? (
					<FeedbackText>
						Você continua{" "}
						<FeedbackTextStrong>dentro da dieta.</FeedbackTextStrong> Muito bem!
					</FeedbackText>
				) : (
					<FeedbackText>
						Você <FeedbackTextStrong>saiu da dieta</FeedbackTextStrong> dessa
						vez, mas continue se esforçando e não desista!
					</FeedbackText>
				)}
			</TextContainer>

			<Image
				source={isWithinDiet ? illustrationInsideDiet : illustrationOfDiet}
			/>
			<Link href="/(home)" asChild>
				<Button.Container>
					<Button.Text>Ir para a página inicial</Button.Text>
				</Button.Container>
			</Link>
		</Container>
	);
}
