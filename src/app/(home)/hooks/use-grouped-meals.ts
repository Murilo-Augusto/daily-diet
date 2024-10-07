import { Meal } from "@/schemas/meal";
import dayjs from "dayjs";

export function useGroupedMeals(meals: Meal[]) {
	const groupedMeals = meals.reduce((acc, meal) => {
		const key = dayjs(meal.date).format("DD[.]MM[.]YY");

		if (!acc[key]) {
			acc[key] = [meal];
		} else {
			acc[key].push(meal);
		}

		return acc;
	}, {} as Record<string, Meal[]>);

	return { groupedMeals };
}
