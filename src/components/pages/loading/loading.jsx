import { Container, LoadContainer, LoadItem } from "./styledLoading";

export const LoadingPage = () => {
    return (
        <Container>
            <LoadContainer id="load">
                <LoadItem>G</LoadItem>
                <LoadItem>N</LoadItem>
                <LoadItem>I</LoadItem>
                <LoadItem>D</LoadItem>
                <LoadItem>A</LoadItem>
                <LoadItem>O</LoadItem>
                <LoadItem>L</LoadItem>
            </LoadContainer>
        </Container>
    )
}