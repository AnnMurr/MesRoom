import { useState } from "react";
import { Btn } from "./components/button/button";
import { FormInner, Label, Input } from "./styledFormBlock";

export const FormBlock = ({ userEmoji, setErrorMessage }) => {
    const [userName, setUserName] = useState("");

    return (
        <FormInner>
            <Label>
                <Input
                    value={userName}
                    placeholder="Name"
                    onChange={(e) => setUserName(e.target.value)}
                    maxLength={10} />
            </Label>
            <Btn
                setErrorMessage={setErrorMessage}
                userEmoji={userEmoji}
                userName={userName} />
        </FormInner>
    )
}