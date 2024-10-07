import { StatusBar, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import "@/lib/dayjs";
import { defaultTheme } from "@/styles/themes/default";

import { Loading } from "@/components/loading";
import { DietContextProvider } from "@/contexts/diet-context";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	});

	if (!fontsLoaded) {
		return (
			<ThemeProvider theme={defaultTheme}>
				<Loading />
			</ThemeProvider>
		);
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<DietContextProvider>
				<SafeAreaProvider>
					<View
						style={{
							flex: 1,
							backgroundColor: defaultTheme.colors["gray-100"],
						}}
					>
						<StatusBar
							barStyle="dark-content"
							backgroundColor="transparent"
							translucent
						/>
						<Stack screenOptions={{ headerShown: false }}></Stack>
					</View>
				</SafeAreaProvider>
			</DietContextProvider>
		</ThemeProvider>
	);
}
