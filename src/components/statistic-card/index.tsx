import { defaultTheme } from "@/styles/themes/default";
import { Container, Description, Icon, Percentage } from "./styles";
import { Link } from "expo-router";

export interface StatisticCardProps {
	percentageOfMealsWithinDiet: number;
	isWithinDiet: boolean;
}

export function StatisticCard({
	isWithinDiet,
	percentageOfMealsWithinDiet,
}: StatisticCardProps) {
	return (
		<Link href="/statistics" asChild>
			<Container isWithinDiet={isWithinDiet}>
				<Icon
					color={
						isWithinDiet
							? defaultTheme.colors["green-dark"]
							: defaultTheme.colors["red-dark"]
					}
				/>
				<Percentage>{percentageOfMealsWithinDiet.toFixed(2)}%</Percentage>
				<Description>das refeições dentro da dieta</Description>
			</Container>
		</Link>
	);
}
