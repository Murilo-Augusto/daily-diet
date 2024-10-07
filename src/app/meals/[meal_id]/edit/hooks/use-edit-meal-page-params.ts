import { useLocalSearchParams } from "expo-router";

export type EditMealPageParams = {
	meal_id: string;
};

export function useEditMealPageParams() {
	const { meal_id } = useLocalSearchParams<EditMealPageParams>();

	return {
		mealId: meal_id,
	};
}
