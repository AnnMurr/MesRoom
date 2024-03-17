import { useDispatch, useSelector } from "react-redux";
import { setChatMessages, setIsEditingMessage, setUserMessage } from "../../../../../../../../../redux/redusers/userReduser";
import { v4 as uuid } from "uuid";
import { getDataFromSessionStorage } from "../../../../../../../../../store/sessionStorage";
import { socket } from "../../../../../../../../../socket/socket";
import { getCurrentTime } from "../../../../../../../../../utils/currentDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { AddEditBtn, SendBtn, TextArea } from "./styledInput";

export const Input = ({ setInitialHeight, initialHeight }) => {
    const { id, name } = getDataFromSessionStorage("userData");
    const { userMessage } = useSelector(state => state.chatData);
    const { isEditingMessage } = useSelector(state => state.chatData);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const text = e.target.value;
        dispatch(setUserMessage(text));
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
        if (userMessage && !userMessage.split("").every((symbol) => symbol === " ")) {
            if (isEditingMessage) {
                socket.emit("EDIT_MESSAGE", {
                    roomId: id,
                    messageId: getDataFromSessionStorage("messageId"),
                    editedMessage: userMessage
                });

                socket.on("changed-messages", (messages) => dispatch(setChatMessages(messages)));
                dispatch(setIsEditingMessage(false));
            } else {
                socket.emit("SEND_MESSAGE", {
                    roomId: id,
                    message: {
                        userName: name,
                        text: userMessage,
                        id: uuid(),
                        time: getCurrentTime()
                    }
                });
            }
            setInitialHeight('33px');
            dispatch(setUserMessage(""));
        }
    }

    return (
        <>
            <TextArea
                onChange={(e) => {
                    handleInputChange(e);
                    if (initialHeight === '33px') setInitialHeight(e.target.scrollHeight + 'px');
                }}
                style={{ height: initialHeight }}
                placeholder="Message"
                onKeyDown={sendMessagebyEnter}
                aria-rowcount={100}
                value={userMessage} />
            {!isEditingMessage ?
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