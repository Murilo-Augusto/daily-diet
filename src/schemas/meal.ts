import { z } from "zod";

export const meal = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	date: z.string(),
	isWithinDiet: z.boolean(),
});

export type Meal = z.infer<typeof meal>;
