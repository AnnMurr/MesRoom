import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getDataFromSessionStorage } from "../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../socket/socket";
import { Container, Icon, Item } from "./styledMessageSettings";

export const MessageSettings = ({ messageId, type }) => {
    const { id } = getDataFromSessionStorage("userData");

    const deleteMessage = () => {
        socket.emit("DELETE_MESSAGE", {
            messageId: messageId,
            roomId: id
        })
    }

    return (
        <Container type={type}>
            <div>
                <Item>
                    <Icon><FontAwesomeIcon color="#fff" icon={faPen} /></Icon> <span>Edit</span>
                </Item>
                <Item onClick={deleteMessage}>
                    <Icon><FontAwesomeIcon color="#fff" icon={faTrashCan} /></Icon> <span>Delete</span>
                </Item>
            </div>
        </Container>
    )
}