import { useLocalSearchParams } from "expo-router";

export type FeedbackPageParams = {
	is_within_diet: string;
};

export function useFeedbackPageParams() {
	const { is_within_diet } = useLocalSearchParams<FeedbackPageParams>();

	return {
		isWithinDiet: is_within_diet,
	};
}
