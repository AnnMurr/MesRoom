import { Button } from "../../../../../common/button/button";
import { useNavigate } from "react-router-dom";

export const Btn = ({ userName, inputRef }) => {
    const navigation = useNavigate()
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
        <Button text={"Sign in"} func={sendData} size={"small"} />
    )
}