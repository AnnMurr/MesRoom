import { useDispatch } from "react-redux";
import { setIsEditingMessage, setUserMessage } from "../../../../../../../../../redux/redusers/userReduser";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getDataFromSessionStorage } from "../../../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../../../socket/socket";
import { Item } from "./components/item/item";
import { Container } from "./styledMessageSettings";

export const MessageSettings = ({
    messageId,
    type,
    messageSettingsPosition,
    messageText
}) => {
    const { id } = getDataFromSessionStorage("userData");
    const dispatch = useDispatch();

    const deleteMessage = () => {
        socket.emit("DELETE_MESSAGE", {
            messageId: messageId,
            roomId: id
        })
    }

    const editMEssage = () => {
        dispatch(setUserMessage(messageText));
        sessionStorage.setItem("messageId", JSON.stringify(messageId));
        dispatch(setIsEditingMessage(true));
    }

    return (
        <Container style={{ top: messageSettingsPosition.y, left: messageSettingsPosition.x - 50 }} type={type}>
            <div>
                {type === "ownSettings" ?
                    <Item text={"Edit"} func={editMEssage} icon={faPen} />
                    : null}
                <Item text={"Delete"} func={deleteMessage} icon={faTrashCan} />
            </div>
        </Container >
    )
}