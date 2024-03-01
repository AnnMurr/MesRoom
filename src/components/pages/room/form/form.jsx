import { useEffect, useRef, useState } from "react";
import { FormInner, Input, Wrapper, Section, Btn } from "./formStyled";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameToRedux } from "../../../../redux/redusers/userReduser";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [userName, setUserName] = useState("")
    const navigation = useNavigate()
    const inputRef = useRef(null)
    const pattern = /^[a-zA-Zа-яА-Я]*$/

    const sendData = async (e) => {
        e.preventDefault()

        if (userName.length >= 2 && !userName.includes(" ") && pattern.test(userName)) {
            const id = document.location.href.split('#room/')[1];
            const data = { name: userName, url: id }

            try {
                const res = await fetch(`http://localhost:1234/room/${id}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                })

                if(!res.ok) {
                    console.error("Failed to send data")
                } else {
                    navigation('/generator')
                }
            } catch (err) {
                throw err
            }
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
                    <Btn onClick={sendData}>Sign in</Btn>
                </FormInner>
            </Wrapper>
        </Section>
    )
}