import { useCallback, useState } from "react";
import { Plus } from "lucide-react-native";

import { defaultTheme } from "@/styles/themes/default";

import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Container, DateSection, Meals, NewMeal, TitleSection } from "./styles";
import { Loading } from "@/components/loading";
import { MealItem } from "@/components/meal-item";
import { StatisticCard } from "@/components/statistic-card";
import { useDiet } from "@/contexts/diet-context";
import { Link, useFocusEffect } from "expo-router";
import { useGroupedMeals } from "./hooks/use-grouped-meals";
import { Alert, SectionList } from "react-native";

export default function HomePage() {
	const [isLoadingMeals, setIsLoadingMeals] = useState(true);

	const { meals, percentageOfMealsWithinDiet, isWithinDiet, onFetchMeals } =
		useDiet();

	const { groupedMeals } = useGroupedMeals(meals);

	const sectionData = Object.keys(groupedMeals).map((date) => ({
		title: date,
		data: groupedMeals[date],
	}));

	async function fetchMeals() {
		try {
			setIsLoadingMeals(true);
			onFetchMeals();
		} catch (error) {
			console.log(error);
			Alert.alert(
				"Carregar refeições",
				"Não foi possível carregar as refeições."
			);
		} finally {
			setIsLoadingMeals(false);
		}
	}

	console.log("home: ", meals);

	useFocusEffect(
		useCallback(() => {
			fetchMeals();
		}, [])
	);

	return (
		<Container>
			<Header />

			<StatisticCard
				percentageOfMealsWithinDiet={percentageOfMealsWithinDiet}
				isWithinDiet={isWithinDiet}
			/>

			<Meals>
				<NewMeal>
					<TitleSection>Refeições</TitleSection>
					<Link href="/new-meal" asChild>
						<Button.Container>
							<Button.Icon
								icon={Plus}
								size={18}
								color={defaultTheme.colors.white}
							/>
							<Button.Text>Nova refeição</Button.Text>
						</Button.Container>
					</Link>
				</NewMeal>

				{isLoadingMeals ? (
					<Loading />
				) : (
					<SectionList
						sections={sectionData}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <MealItem {...item} />}
						renderSectionHeader={({ section }) => (
							<DateSection>{section.title}</DateSection>
						)}
						contentContainerStyle={{ gap: 8 }}
					/>
				)}
			</Meals>
		</Container>
	);
}
