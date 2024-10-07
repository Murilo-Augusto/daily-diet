import { ThemeType } from "@/styles/themes/default";
import "styled-components/native";

declare module "styled-components/native" {
	export interface DefaultTheme extends ThemeType {}
}