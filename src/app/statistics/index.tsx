import { defaultTheme } from "@/styles/themes/default";
import {
	BackIcon,
	BoldText,
	Container,
	Content,
	ContentTitle,
	Data,
	Description,
	Box,
	Percentage,
	PercentageText,
	RegularText,
	MealBoxWithinDiet,
	MealBoxOutsideDiet,
} from "./styles";
import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useDiet } from "@/contexts/diet-context";

export default function StatisticsPage() {
	const {
		mealsAmount,
		mealsAmountWithinDiet,
		mealsAmountOutsideDiet,
		bestSequenceOfDishesWithinDiet,
		percentageOfMealsWithinDiet,
		isWithinDiet,
	} = useDiet();

	return (
		<Container>
			<Percentage isWithinDiet={isWithinDiet}>
				<Link href="/" asChild style={{ alignSelf: "flex-start" }}>
					<TouchableOpacity activeOpacity={0.7}>
						<BackIcon
							color={
								isWithinDiet
									? defaultTheme.colors["green-dark"]
									: defaultTheme.colors["red-dark"]
							}
						/>
					</TouchableOpacity>
				</Link>

				<View>
					<PercentageText>
						{percentageOfMealsWithinDiet.toFixed(2)}%
					</PercentageText>
					<Description>das refeições dentro da dieta</Description>
				</View>
			</Percentage>

			<Content>
				<ContentTitle>Estatísticas gerais</ContentTitle>

				<Data>
					<Box>
						<BoldText>{bestSequenceOfDishesWithinDiet}</BoldText>
						<RegularText>
							melhor sequência de pratos dentro da dieta
						</RegularText>
					</Box>
					<Box>
						<BoldText>{mealsAmount}</BoldText>
						<RegularText>refeições registradas</RegularText>
					</Box>
					<View style={{ flexDirection: "row", gap: 12 }}>
						<MealBoxWithinDiet>
							<BoldText>{mealsAmountWithinDiet}</BoldText>
							<RegularText>refeições dentro da dieta</RegularText>
						</MealBoxWithinDiet>
						<MealBoxOutsideDiet>
							<BoldText>{mealsAmountOutsideDiet}</BoldText>
							<RegularText>refeições fora da dieta</RegularText>
						</MealBoxOutsideDiet>
					</View>
				</Data>
			</Content>
		</Container>
	);
}
