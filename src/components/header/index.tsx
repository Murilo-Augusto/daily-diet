import { Container, Logo, ProfileImage } from "./styles";

import logoImg from "@/assets/logo.png";

export function Header() {
	return (
		<Container>
			<Logo source={logoImg} />
			<ProfileImage source={{ uri: "https://github.com/murilo-augusto.png" }} />
		</Container>
	);
}
