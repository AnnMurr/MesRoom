import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../common/button/button";
import { setDataToSessionStorage } from "../../../../../../store/sessionStorage";
import { checkUserName, checkUserIcon } from "../../../../../../api/checkUserData";
import { LoadingPage } from "../../../../loading/loading";
import { useState } from "react";

export const Btn = ({ userName, userEmoji, setErrorMessage }) => {
    const [isLoad, setIsLoad] = useState(false)
    const navigation = useNavigate();
    const roomId = document.location.href.split('#room/')[1];

    const sendData = async (e) => {
        e.preventDefault();
        const isUser = await checkUserName(roomId, userName);
        const isEmoji = await checkUserIcon(roomId, userEmoji);

        if (isUser) {
            setErrorMessage("User has already existed");
        } else if(isEmoji) {
            setErrorMessage("This emoji has already taken");
        } else if (userName.length >= 2) {
            const data = {
                name: userName,
                id: roomId,
                userEmoji: userEmoji
            };
            setIsLoad(true);
            setTimeout(() => {
                setIsLoad(false)
                navigation(`/room/${roomId}/${userName}`);
            }, 5000)
        
            setDataToSessionStorage("userData", data);
        } else {
            setErrorMessage("wrong data");
        }
    }
    
    return (
        <div style={{marginTop: "20px"}}>
            <Button text={"Sign in"} func={sendData} size={"small"} />

         {isLoad ?   <LoadingPage /> : null}
        </div>
    )
}