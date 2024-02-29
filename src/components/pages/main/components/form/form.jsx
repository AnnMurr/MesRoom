import { FormInner, Input, Wrapper, Section, Btn } from "./formStyled";

export const Form = () => {
    return (
        <Section>
            <Wrapper>
                <FormInner>
                    <Input />
                    <Input />
                    <Btn>Sign in</Btn>
                </FormInner>
            </Wrapper>
        </Section>
    )
}