import { LucideIcon, LucideProps } from "lucide-react-native";

export interface ButtonIconProps extends LucideProps {
	icon: LucideIcon;
}

export function ButtonIcon({
	icon: Icon,
	size,
	color,
	...rest
}: ButtonIconProps) {
	return <Icon size={size} color={color} {...rest} />;
}
