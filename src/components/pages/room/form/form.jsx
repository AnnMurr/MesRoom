import { useState } from "react";
import { EmojiComponent } from "./components/emoji/emoji";
import { FormBlock } from "./components/formBlock/formBlock";
import { Wrapper, Container, Section } from "./formStyled";

export const Form = () => {
    const [userEmoji, setUserEmoji] = useState("\u{1F60A}");

    return (
        <Section>
            <Container>
                <Wrapper>
                    <EmojiComponent userEmoji={userEmoji} setUserEmoji={setUserEmoji} />
                    <FormBlock userEmoji={userEmoji} />
                </Wrapper>
            </Container>
        </Section>
    )
}