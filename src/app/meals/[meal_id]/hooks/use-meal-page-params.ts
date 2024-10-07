import { useLocalSearchParams } from "expo-router";

export type MealPageParams = {
	meal_id: string;
};

export function useMealPageParams() {
	const { meal_id } = useLocalSearchParams<MealPageParams>();

	return {
		mealId: meal_id,
	};
}
