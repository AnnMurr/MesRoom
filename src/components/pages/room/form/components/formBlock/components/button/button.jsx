import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../../../common/button/button";
import { setDataToSessionStorage } from "../../../../../../../../store/sessionStorage";
import { checkUserName, checkUserIcon } from "../../../../../../../../api/checkUserData";

export const Btn = ({ userName, userEmoji, setErrorMessage }) => {
    const navigation = useNavigate();
    const roomId = document.location.href.split('#room/')[1];

    const removeErrorMessage = () => setTimeout(() => setErrorMessage(""), 3000);

    const sendData = async (e) => {
        e.preventDefault();
        const isUser = await checkUserName(roomId, userName);
        const isEmoji = await checkUserIcon(roomId, userEmoji);

        if (isUser) {
            setErrorMessage("User has already existed");
            removeErrorMessage()
        } else if (isEmoji) {
            setErrorMessage("This emoji has already taken");
            removeErrorMessage()
        } else if (userName.length >= 2) {
            const data = {
                name: userName,
                id: roomId,
                userEmoji: userEmoji
            };
            setDataToSessionStorage("userData", data);
            navigation(`/room/${roomId}/${userName}`);
        } else {
            setErrorMessage("wrong data");
            removeErrorMessage();
        }
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Button text={"Sign in"} func={sendData} size={"small"} />
        </div>
    )
}