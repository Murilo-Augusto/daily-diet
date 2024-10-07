import { useCallback, useState } from "react";
import { Alert, Keyboard, TouchableOpacity, View } from "react-native";
import { useFocusEffect } from "expo-router";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";

import { defaultTheme } from "@/styles/themes/default";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { IsWithinDietButton } from "@/components/is-within-diet-button";
import {
	BackIcon,
	ButtonBack,
	Container,
	Content,
	Field,
	Form,
	Header,
	Label,
	Title,
} from "./styles";
import { getMeal } from "@/storage/meals/get";
import { Loading } from "@/components/loading";
import { useEditMealPageParams } from "./hooks/use-edit-meal-page-params";
import { updateMeal } from "@/storage/meals/update-meal";

export default function EditMealPage() {
	const { mealId } = useEditMealPageParams();

	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [isWithinDiet, setIsWithinDiet] = useState<boolean>();

	const [isLoadingDetails, setIsLoadingDetails] = useState(true);
	const [isEditing, setIsEditing] = useState(false);

	async function getMealDetails() {
		setIsLoadingDetails(true);
		try {
			const meal = await getMeal(mealId);
			setName(meal.name);
			setDescription(meal.description);
			setDate(dayjs(meal.date).toDate());
			setTime(dayjs(meal.date).toDate());
			setIsWithinDiet(meal.isWithinDiet);
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

	async function handleEditMeal() {
		const onlyTime = dayjs(time).format("HH:mm:ss");
		const onlyDate = dayjs(date).format("YYYY-MM-DD");

		if (!name.trim()) {
			return Alert.alert(
				"Editar Refeição",
				"Preencha todos os campos para salvar as alterações."
			);
		}

		if (!description.trim()) {
			return Alert.alert(
				"Editar Refeição",
				"Preencha todos os campos para salvar as alterações."
			);
		}

		if (!date) {
			return Alert.alert(
				"Editar Refeição",
				"Preencha todos os campos para salvar as alterações."
			);
		}

		if (!time) {
			return Alert.alert(
				"Editar Refeição",
				"Preencha todos os campos para salvar as alterações."
			);
		}

		if (isWithinDiet === undefined) {
			return Alert.alert(
				"Editar Refeição",
				"Preencha todos os campos para salvar as alterações."
			);
		}

		try {
			setIsEditing(true);

			await updateMeal({
				id: mealId,
				name,
				description,
				date: dayjs(`${onlyDate}T${onlyTime}`).toISOString(),
				isWithinDiet,
			});

			await getMealDetails();
		} catch (error) {
			console.log(error);
			Alert.alert("Editar Refeição", "Não foi possível salvar as alterações.");
		} finally {
			setIsEditing(false);
			Keyboard.dismiss();
		}
	}

	useFocusEffect(
		useCallback(() => {
			getMealDetails();
		}, [])
	);

	if (isLoadingDetails || isEditing) {
		return <Loading />;
	}

	return (
		<Container>
			<Header>
				<ButtonBack
					href={{
						pathname: "/meals/[meal_id]",
						params: { meal_id: mealId },
					}}
					asChild
				>
					<TouchableOpacity activeOpacity={0.7}>
						<BackIcon />
					</TouchableOpacity>
				</ButtonBack>

				<Title>Editar refeição</Title>
			</Header>

			<Content>
				<Form>
					<Input label="Nome" value={name} onChangeText={setName} />
					<Input
						label="Descrição"
						value={description}
						onChangeText={setDescription}
						multiline
						style={{ height: 150, textAlignVertical: "top" }}
					/>
					<Field>
						<Input
							label="Data"
							style={{ flex: 1 }}
							contentContainerStyle={{ flex: 1 }}
							onFocus={() => Keyboard.dismiss()}
							showSoftInputOnFocus={false}
							onPressIn={() => setShowDatePicker(true)}
							value={dayjs(date).format("DD/MM/YYYY")}
						/>

						<Input
							label="Hora"
							style={{ flex: 1 }}
							contentContainerStyle={{ flex: 1 }}
							onFocus={() => Keyboard.dismiss()}
							showSoftInputOnFocus={false}
							onPressIn={() => setShowTimePicker(true)}
							value={dayjs(time).format("HH:mm")}
						/>

						{showDatePicker && (
							<DateTimePicker
								value={date}
								mode="date"
								onChange={(event, selectedDate) => {
									setShowDatePicker(false);
									if (event.type === "set") {
										setDate(selectedDate ? selectedDate : new Date());
									}
								}}
							/>
						)}

						{showTimePicker && (
							<DateTimePicker
								value={time ? dayjs(time).toDate() : dayjs().toDate()}
								mode="time"
								is24Hour
								onChange={(event, selectedDate) => {
									setShowTimePicker(false);
									if (event.type === "set") {
										setTime(selectedDate ? selectedDate : new Date());
									}
								}}
							/>
						)}
					</Field>

					<View style={{ gap: 4 }}>
						<Label>Está dentro da dieta?</Label>
						<Field>
							<IsWithinDietButton
								text="Sim"
								isWithinDiet={isWithinDiet ? true : undefined}
								indicatorColor={defaultTheme.colors["green-dark"]}
								onPress={() => setIsWithinDiet(true)}
							/>
							<IsWithinDietButton
								text="Não"
								isWithinDiet={isWithinDiet ?? true ? undefined : false}
								indicatorColor={defaultTheme.colors["red-dark"]}
								onPress={() => setIsWithinDiet(false)}
							/>
						</Field>
					</View>
				</Form>
				<Button.Container onPress={handleEditMeal}>
					<Button.Text>Salvar alterações</Button.Text>
				</Button.Container>
			</Content>
		</Container>
	);
}
