import AsyncStorage from "@react-native-async-storage/async-storage";

import { Meal } from "@/schemas/meal";

import { fetchMeals } from "./fetch";
import { meals_key } from "../storage-config";

export async function createMeal(newMeal: Meal) {
	const storedMeals = await fetchMeals();

	await AsyncStorage.setItem(
		meals_key,
		JSON.stringify([...storedMeals, newMeal])
	);
}
