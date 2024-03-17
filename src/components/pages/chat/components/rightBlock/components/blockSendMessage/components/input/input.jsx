import { v4 as uuid } from "uuid";
import { getDataFromSessionStorage } from "../../../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../../../socket/socket";
import { getCurrentTime } from "../../../../../../../../../utils/currentDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { AddEditBtn, SendBtn, TextArea } from "./styledInput";

export const Input = ({
    setMessage,
    message,
    isEditing,
    setChatMessages,
    setIsEditing,
    setInitialHeight,
    initialHeight }) => {

    const { id, name } = getDataFromSessionStorage("userData");

    const handleInputChange = (e) => {
        const text = e.target.value;
        setMessage(text);
        autoResize(e);
    };

    const autoResize = (e) => {
        e.target.style.height = '33px';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const sendMessagebyEnter = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }

    const sendMessage = () => {
        if (message && !message.split("").every((symbol) => symbol === " ")) {
            if (isEditing) {
                socket.emit("EDIT_MESSAGE", {
                    roomId: id,
                    messageId: getDataFromSessionStorage("messageId"),
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
            setInitialHeight('33px');
            setMessage("");
        }
    }

    return (
        <>
            <TextArea
                onChange={(e) => {
                    console.log(e.target.value)
                    handleInputChange(e);
                    if (initialHeight === '33px') setInitialHeight(e.target.scrollHeight + 'px');
                }}
                style={{ height: initialHeight }}
                placeholder="Message"
                onKeyDown={sendMessagebyEnter}
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
        </>
    )
}