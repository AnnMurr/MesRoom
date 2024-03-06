import { useState } from "react";
import { Btn } from "../button/button";
import { FormInner, Label, Input, ErrorMes } from "./styledFormBlock";

export const FormBlock = ({ userEmoji }) => {
    const [userName, setUserName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    return (
        <FormInner>
            <Label>
                <Input
                    value={userName}
                    placeholder="Name"
                    onChange={(e) => setUserName(e.target.value)}
                    maxLength={10} />
                {errorMessage ? <ErrorMes>{errorMessage}</ErrorMes> : null}
            </Label>
            <Btn 
            setErrorMessage={setErrorMessage} 
            userEmoji={userEmoji} 
            userName={userName}/>
        </FormInner>
    )
}