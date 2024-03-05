import { EmojiComponent } from "./components/emoji/emoji";
import { Wrapper, Container, Section } from "./formStyled";
import { FormBlock } from "./components/formBlock/formBlock";

export const Form = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <EmojiComponent />
                    <FormBlock />
                </Wrapper>
            </Container>
        </Section>
    )
}