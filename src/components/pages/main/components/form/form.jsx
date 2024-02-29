import { useState } from "react";
import { FormInner, Input, Wrapper, Section, Btn } from "./formStyled";

export const Form = () => {
    const [userName, setUserName]  = useState("")
    console.log(userName)
    return (
        <Section>
            <Wrapper>
                <FormInner>
                    <Input 
                    value={userName} 
                    placeholder="Name"
                    onChange={(e) => setUserName(e.target.value)} />
                    <Btn>Sign in</Btn>
                </FormInner>
            </Wrapper>
        </Section>
    )
}