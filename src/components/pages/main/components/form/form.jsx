import { useEffect, useState } from "react";
import { FormInner, Input, Wrapper, Section, Btn } from "./formStyled";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameToRedux } from "../../../../../redux/redusers/userReduser";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [userName, setUserName] = useState("")
    const stateFromRedux = useSelector((state) => state.user.userName)
    const dispath = useDispatch()
    const navigation = useNavigate()

    const sendData = (e) => {
        e.preventDefault()
        navigation('/generator')
    }

    useEffect(() => {
        dispath(setUserNameToRedux(userName))
    }, [userName])

    return (
        <Section>
            <Wrapper>
                <FormInner>
                    <Input
                        value={userName}
                        placeholder="Name"
                        onChange={(e) => setUserName(e.target.value)} />
                    <Btn onClick={sendData}>Sign in</Btn>
                </FormInner>
            </Wrapper>
        </Section>
    )
}