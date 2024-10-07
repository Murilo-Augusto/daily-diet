import dayjs from "dayjs";
import { Container, MealHour, MealName, MealStatus, Separator } from "./styles";
import { Link } from "expo-router";

export interface MealItemProps {
	id: string;
	name: string;
	date: string;
	isWithinDiet: boolean;
}

export function MealItem({ id, name, date, isWithinDiet }: MealItemProps) {
	return (
		<Link href={`/meals/${id}`} asChild>
			<Container>
				<MealHour>{dayjs(date).format("HH:mm")}</MealHour>
				<Separator />
				<MealName>{name}</MealName>
				<MealStatus isWithinDiet={isWithinDiet} />
			</Container>
		</Link>
	);
}
