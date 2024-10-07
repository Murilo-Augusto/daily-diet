import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchMeals } from "./fetch";
import { meals_key } from "../storage-config";

export async function deleteMeal(mealIdToDelete: string) {
	const meals = await fetchMeals();

	const filteredMeals = meals.filter((meal) => meal.id !== mealIdToDelete);

	await AsyncStorage.setItem(meals_key, JSON.stringify(filteredMeals));
}
