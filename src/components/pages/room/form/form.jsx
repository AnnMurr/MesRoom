import { useState } from "react";
import { EmojiComponent } from "./components/emoji/emoji";
import { FormBlock } from "./components/formBlock/formBlock";
import { OutlinedAlerts } from "../../../common/alerts/alerts";
import { Wrapper, Container, Section } from "./formStyled";

export const Form = () => {
    const [userEmoji, setUserEmoji] = useState("\u{1F60A}");
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <Section>
            <Container>
                <Wrapper>
                    <EmojiComponent userEmoji={userEmoji} setUserEmoji={setUserEmoji} />
                    <FormBlock setErrorMessage={setErrorMessage} userEmoji={userEmoji} />
                </Wrapper>
                {errorMessage ? <OutlinedAlerts type={"error"} text={errorMessage} /> : null}
            </Container>
        </Section>
    )
}