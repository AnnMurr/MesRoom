import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Container, Icon, Item } from "./styledMessageSettings";
import { getDataFromSessionStorage } from "../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../socket/socket";

export const MessageSettings = ({ messageId }) => {
    const { id } = getDataFromSessionStorage("userData");
    const deleteMessage = () => {
        socket.emit("DELETE_MESSAGE", {
            messageId: messageId,
            roomId: id
        })
    }

    return (
        <Container>
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