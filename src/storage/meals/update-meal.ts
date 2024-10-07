import { Meal } from "@/schemas/meal";
import { fetchMeals } from "./fetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { meals_key } from "../storage-config";

export async function updateMeal(mealToUpdate: Meal) {
	const meals = await fetchMeals();

	console.log("update fn: ", meals);

	const updateMeals = meals.map((meal) => {
		if (meal.id === mealToUpdate.id) {
			return {
				...mealToUpdate,
			};
		} else return meal;
	});

	await AsyncStorage.setItem(meals_key, JSON.stringify(updateMeals));
}
