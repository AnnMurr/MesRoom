import { SpaceBackground } from "./components/backgrounds/spaceBackground";
import { Container } from "./bodyStyled";

export const Body = ({ children }) => {
    return (
        <Container>
            <SpaceBackground />
            {children}
        </Container>
    )
}