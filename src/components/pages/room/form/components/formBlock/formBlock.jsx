import { useRef, useState } from "react";
import { Btn } from "../button/button";
import { FormInner, Label, Input } from "./styledFormBlock";

export const FormBlock = () => {
    const [userName, setUserName] = useState("")
    const inputRef = useRef(null)

    return (
        <FormInner>
            <Label>
                <Input
                    ref={inputRef}
                    value={userName}
                    placeholder="Name"
                    onChange={(e) => setUserName(e.target.value)} />
            </Label>
            <Btn userName={userName} inputRef={inputRef} />
        </FormInner>
    )
}