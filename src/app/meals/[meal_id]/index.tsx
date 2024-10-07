import { useCallback, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { router, useFocusEffect } from "expo-router";
import { Pencil, Trash2 } from "lucide-react-native";

import { Meal } from "@/schemas/meal";
import { deleteMeal } from "@/storage/meals/delete";
import { getMeal } from "@/storage/meals/get";
import { defaultTheme } from "@/styles/themes/default";

import { Loading } from "@/components/loading";
import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import {
	BackIcon,
	ButtonBack,
	ButtonsContainer,
	Container,
	Content,
	Footer,
	Header,
	Infos,
	Label,
	MealInfo,
	MealName,
	Status,
	Tag,
	Title,
	Wrapper,
} from "./styles";
import { useMealPageParams } from "./hooks/use-meal-page-params";

export default function MealPage() {
	const [showModal, setShowModal] = useState(false);

	const { mealId } = useMealPageParams();
	const [meal, setMeal] = useState({} as Meal);

	const [isLoadingDetails, setIsLoadingDetails] = useState(false);
	const [isDeletingMeal, setIsDeletingMeal] = useState(false);

	async function getMealDetails() {
		setIsLoadingDetails(true);
		try {
			const meal = await getMeal(mealId);
			setMeal(meal);
		} catch (error) {
			console.log(error);
			Alert.alert(
				"Erro",
				"Erro ao tentar carregar as informações da refeição."
			);
		} finally {
			setIsLoadingDetails(false);
		}
	}

	async function handleDeleteMeal() {
		setIsDeletingMeal(true);
		try {
			await deleteMeal(mealId);
			router.replace("/(home)");
		} catch (error) {
			console.log(error);
			Alert.alert("Erro", "Erro ao tentar deletar a refeição.");
		} finally {
			setIsDeletingMeal(false);
		}
	}

	useFocusEffect(
		useCallback(() => {
			getMealDetails();
		}, [])
	);

	if (isLoadingDetails || isDeletingMeal) {
		return <Loading />;
	}

	return (
		<Container>
			<Header isWithinDiet={meal.isWithinDiet}>
				<ButtonBack href="/(home)" asChild>
					<TouchableOpacity activeOpacity={0.7}>
						<BackIcon />
					</TouchableOpacity>
				</ButtonBack>

				<Title>Refeição</Title>
			</Header>

			<Content>
				<Infos>
					<Wrapper>
						<MealName>{meal.name}</MealName>
						<MealInfo>{meal.description}</MealInfo>
					</Wrapper>

					<Wrapper>
						<Label>Data e hora</Label>
						<MealInfo>{`${dayjs(meal.date).format("DD/MM/YYYY")} às ${dayjs(
							meal.date
						).format("HH:mm")}`}</MealInfo>
					</Wrapper>

					<Tag>
						<Status isWithinDiet={meal.isWithinDiet} />
						{meal.isWithinDiet ? (
							<MealInfo>dentro da dieta</MealInfo>
						) : (
							<MealInfo>fora da dieta</MealInfo>
						)}
					</Tag>
				</Infos>

				<Footer>
					<Button.Container
						onPress={() =>
							router.navigate({
								pathname: "/meals/[meal_id]/edit",
								params: { meal_id: mealId },
							})
						}
					>
						<Button.Icon
							icon={Pencil}
							color={defaultTheme.colors.white}
							size={18}
						/>
						<Button.Text>Editar refeição</Button.Text>
					</Button.Container>

					<Button.Container
						variant="outline"
						onPress={() => setShowModal(true)}
					>
						<Button.Icon
							icon={Trash2}
							color={defaultTheme.colors["gray-700"]}
							size={18}
						/>
						<Button.Text>Excluir refeição</Button.Text>
					</Button.Container>
				</Footer>
			</Content>

			<Modal
				text="Deseja realmente excluir o registro da refeição?"
				visible={showModal}
				onRequestClose={() => setShowModal(false)}
			>
				<ButtonsContainer>
					<Button.Container
						variant="outline"
						onPress={() => setShowModal(false)}
					>
						<Button.Text>Cancelar</Button.Text>
					</Button.Container>

					<Button.Container onPress={handleDeleteMeal}>
						<Button.Text>Sim, excluir</Button.Text>
					</Button.Container>
				</ButtonsContainer>
			</Modal>
		</Container>
	);
}
