import { Meal } from "@/schemas/meal";
import { fetchMeals } from "@/storage/meals/fetch";
import dayjs from "dayjs";
import { createContext, ReactNode, useContext, useState } from "react";

interface DietContextType {
	meals: Meal[];
	mealsAmount: number;
	mealsAmountWithinDiet: number;
	mealsAmountOutsideDiet: number;
	percentageOfMealsWithinDiet: number;
	bestSequenceOfDishesWithinDiet: number;
	isWithinDiet: boolean;
	onFetchMeals: () => void;
}

export const DietContext = createContext({} as DietContextType);

interface DietContextProps {
	children: ReactNode;
}

export function DietContextProvider({ children }: DietContextProps) {
	const [meals, setMeals] = useState<Meal[]>([]);

	const mealsAmount = meals.length;

	const mealsAmountWithinDiet = meals.filter(
		(meal) => meal.isWithinDiet
	).length;

	const mealsAmountOutsideDiet = meals.filter(
		(meal) => !meal.isWithinDiet
	).length;

	const percentageOfMealsWithinDiet = mealsAmount
		? (mealsAmountWithinDiet / mealsAmount) * 100
		: 0;

	const isWithinDiet = percentageOfMealsWithinDiet >= 70;

	const bestSequenceOfDishesWithinDiet = () => {
		let bestSequence = 0;
		let currentSequence = 0;

		meals.forEach((meal) => {
			if (meal.isWithinDiet) {
				currentSequence++;
				if (currentSequence > bestSequence) {
					bestSequence = currentSequence;
				}
			} else {
				currentSequence = 0;
			}
		});

		return bestSequence;
	};

	async function onFetchMeals() {
		const meals = await fetchMeals();
		setMeals(meals);
	}

	return (
		<DietContext.Provider
			value={{
				meals: meals.sort(
					(a, b) => dayjs(b.date).unix() - dayjs(a.date).unix()
				),
				mealsAmount,
				mealsAmountWithinDiet,
				mealsAmountOutsideDiet,
				percentageOfMealsWithinDiet,
				bestSequenceOfDishesWithinDiet: bestSequenceOfDishesWithinDiet(),
				isWithinDiet,
				onFetchMeals,
			}}
		>
			{children}
		</DietContext.Provider>
	);
}

export const useDiet = () => useContext(DietContext);
