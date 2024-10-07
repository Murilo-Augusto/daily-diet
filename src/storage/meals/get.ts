import { Meal } from "@/schemas/meal";
import { fetchMeals } from "./fetch";

export async function getMeal(mealId: string) {
	const meals = await fetchMeals();

	const meal = meals.find((meal) => meal.id === mealId);

	if (!meal) {
		return {} as Meal;
	}

	return meal;
}
