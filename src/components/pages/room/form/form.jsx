import { EmojiComponent } from "./components/emoji/emoji";
import { Wrapper, Container, Section } from "./formStyled";
import { FormBlock } from "./components/formBlock/formBlock";
import { useState } from "react";

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