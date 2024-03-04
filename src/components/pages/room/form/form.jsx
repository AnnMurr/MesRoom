import { useRef, useState } from "react";
import { FormInner, Input, Wrapper, Section, Btn } from "./formStyled";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../common/button/button";

export const Form = () => {
    const [userName, setUserName] = useState("")
    const navigation = useNavigate()
    const inputRef = useRef(null)
    const pattern = /^[a-zA-Zа-яА-Я]*$/

    const sendData = async (e) => {
        e.preventDefault()

        if (userName.length >= 2 && !userName.includes(" ") && pattern.test(userName)) {
            const id = document.location.href.split('#room/')[1];
            navigation(`/room/${id}/${userName}`)
        } else {
            inputRef.current.style.border = "2px solid #990909ad"
        }
    }

    return (
        <Section>
            <Wrapper>
                <FormInner>
                    <Input
                        ref={inputRef}
                        value={userName}
                        placeholder="Name"
                        onChange={(e) => setUserName(e.target.value)} />
                    <Button text={"Sign in"} func={sendData} size={"small"} />
                </FormInner>
            </Wrapper>
        </Section>
    )
}