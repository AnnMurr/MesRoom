import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getDataFromSessionStorage } from "../../../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../../../socket/socket";
import { Container, Icon, Item, Btn, Text } from "./styledMessageSettings";

export const MessageSettings = ({
    messageId,
    type,
    setMessage,
    messageSettingsPosition,
    setIsEditing,
    messageText
}) => {
    const { id } = getDataFromSessionStorage("userData");

    const deleteMessage = () => {
        socket.emit("DELETE_MESSAGE", {
            messageId: messageId,
            roomId: id
        })
    }
    
    const editMEssage = () => {
        setMessage(messageText)
        sessionStorage.setItem("messageId", JSON.stringify(messageId))
        setIsEditing(true);
    }

    return (
        <Container style={{ top: messageSettingsPosition.y, left: messageSettingsPosition.x - 50 }} type={type}>
            <div>
                {type === "ownSettings" ?
                    <Item>
                        <Btn onClick={editMEssage}>
                            <Icon><FontAwesomeIcon size="sm" color="#fff" icon={faPen} /></Icon> <Text>Edit</Text>
                        </Btn>
                    </Item>
                    : null}
                <Item>
                    <Btn onClick={deleteMessage}>
                        <Icon><FontAwesomeIcon size="sm"  color="#fff" icon={faTrashCan} /></Icon>
                        <Text>Delete</Text>
                    </Btn>
                </Item>
            </div>
        </Container >
    )
}