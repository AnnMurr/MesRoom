import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../common/button/button";
import { setDataToSessionStorage } from "../../../../../../store/sessionStorage";

export const Btn = ({ userName, userEmoji, setErrorMessage }) => {
    const navigation = useNavigate();
    const roomId = document.location.href.split('#room/')[1];

    const checkUserName = async () => {
        try {
            const response = await fetch("http://localhost:1234/check-username", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    roomId: roomId,
                    userName: userName
                })
            });

            if (!response.ok) throw new Error('Failed to check user name');

            const data = await response.json();
            return data.isUserName;
        } catch (error) {
            throw error
        }
    }

    const sendData = async (e) => {
        e.preventDefault();
        const isUser = await checkUserName();

        if (isUser) {
            setErrorMessage("user has already existed");
        } else if (userName.length >= 2) {
            const data = {
                name: userName,
                id: roomId,
                userEmoji: userEmoji
            };
            navigation(`/room/${roomId}/${userName}`);
            setDataToSessionStorage("userData", data);
        } else {
            setErrorMessage("wrong data");
        }
    }
    
    return (
        <div style={{marginTop: "20px"}}>
            <Button text={"Sign in"} func={sendData} size={"small"} />
        </div>
    )
}