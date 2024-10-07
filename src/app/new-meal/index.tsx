import { useState } from "react";
import { Alert, Keyboard, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";

import { createMeal } from "@/storage/meals/create";
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

function gerarId() {
	return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export default function NewMealPage() {
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [isWithinDiet, setIsWithinDiet] = useState<boolean>();

	const [isCreatingMeal, setIsCreatingMeal] = useState(false);

	function resetFields() {
		setName("");
		setDescription("");
		setDate(new Date());
		setTime(new Date());
		setIsWithinDiet(undefined);
	}

	async function handleCreateNewMeal() {
		const onlyTime = dayjs(time).format("HH:mm:ss");
		const onlyDate = dayjs(date).format("YYYY-MM-DD");

		if (!name.trim()) {
			return Alert.alert(
				"Nova Refeição",
				"Preencha todos os campos para criar uma nova refeição."
			);
		}

		if (!description.trim()) {
			return Alert.alert(
				"Nova Refeição",
				"Preencha todos os campos para criar uma nova refeição."
			);
		}

		if (!date) {
			return Alert.alert(
				"Nova Refeição",
				"Preencha todos os campos para criar uma nova refeição."
			);
		}

		if (!time) {
			return Alert.alert(
				"Nova Refeição",
				"Preencha todos os campos para criar uma nova refeição."
			);
		}

		if (isWithinDiet === undefined) {
			return Alert.alert(
				"Nova Refeição",
				"Preencha todos os campos para criar uma nova refeição."
			);
		}

		try {
			setIsCreatingMeal(true);
			await createMeal({
				name,
				date: dayjs(`${onlyDate}T${onlyTime}`).toISOString(),
				description,
				isWithinDiet,
				id: gerarId(),
			});

			router.replace(`/new-meal/feedback?is_within_diet=${isWithinDiet}`);
			resetFields();
		} catch (error) {
			console.log(error);
			Alert.alert("Nova Refeição", "Não foi possível criar uma nova refeição.");
		} finally {
			setIsCreatingMeal(false);
			Keyboard.dismiss();
		}
	}

	return (
		<Container>
			<Header>
				<ButtonBack href="/(home)" asChild>
					<TouchableOpacity activeOpacity={0.7}>
						<BackIcon />
					</TouchableOpacity>
				</ButtonBack>

				<Title>Nova refeição</Title>
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
				<Button.Container onPress={handleCreateNewMeal}>
					<Button.Text>Cadastrar refeição</Button.Text>
				</Button.Container>
			</Content>
		</Container>
	);
}
