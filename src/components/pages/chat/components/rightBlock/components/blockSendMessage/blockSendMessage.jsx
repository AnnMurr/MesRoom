import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { EditDetailsBlock } from "./components/editDetails/editDetails";
import { getCurrentTime } from "../../../../../../../utils/currentDate";
import { getDataFromSessionStorage } from "../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../socket/socket";
import { v4 as uuid } from "uuid";
import { Wrapper, SendBtn, AddEditBtn, TextArea } from "./styledBlockSendMessage";

export const BlockSendMessage = ({ setMessage, message, isEditing, setIsEditing, setChatMessages }) => {
    const { id, name } = getDataFromSessionStorage("userData");

    const sendMessagebyEnter = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }

    const closeEditing = () => {
        setIsEditing(false);
        setMessage("");
    }

    const sendMessage = () => {

        if (message && !message.split("").every((symbol) => symbol === " ")) {
            if (isEditing) {
                socket.emit("EDIT_MESSAGE", {
                    roomId: id,
                    messageId: JSON.parse(sessionStorage.getItem("messageId")),
                    editedMessage: message
                });

                socket.on("changed-messages", (messages) => setChatMessages(messages));
                setIsEditing(false);
            } else {
                socket.emit("SEND_MESSAGE", {
                    roomId: id,
                    message: {
                        userName: name,
                        text: message,
                        id: uuid(),
                        time: getCurrentTime()
                    }
                });
            }
            setMessage("");
        }
    }

    const autoResize = (e) => {
        e.target.style.height = '33px';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div>
            {isEditing ?
                <EditDetailsBlock message={message} closeEditing={closeEditing} /> : null}
            <Wrapper>
                <TextArea
                    onChange={(e) => {
                        setMessage(e.target.value);
                        autoResize(e);
                    }}
                    placeholder="Message"
                    onKeyDown={sendMessagebyEnter}
                    style={{ minHeight: '33px' }}
                    aria-rowcount={100}
                    value={message} />
                {!isEditing ?
                    <SendBtn onClick={sendMessage}>
                        <FontAwesomeIcon
                            size="lg"
                            color="#55ea47d4"
                            icon={faLocationArrow} />
                    </SendBtn>
                    :
                    <AddEditBtn onClick={sendMessage}>
                        <FontAwesomeIcon
                            size="lg"
                            color="#55ea47d4"
                            icon={faCircleCheck} />
                    </AddEditBtn>}
            </Wrapper>
        </div>
    )
}