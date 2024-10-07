import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@/schemas/meal";
import { meals_key } from "../storage-config";

export async function fetchMeals() {
	const storage = await AsyncStorage.getItem(meals_key);
	const meals: Meal[] = storage ? JSON.parse(storage) : [];

	return meals;
}
