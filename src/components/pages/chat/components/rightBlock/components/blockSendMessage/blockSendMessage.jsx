import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { socket } from "../../../../../../../socket/socket";
import { v4 as uuid } from "uuid";
import { getCurrentTime } from "../../../../../../../utils/currentDate";
import { getDataFromSessionStorage } from "../../../../../../../store/sessionStorage";
import { Container, SendBtn, TextArea } from "./styledBlockSendMessage";

export const BlockSendMessage = ({ setMessage, message }) => {
    const { id, name } = getDataFromSessionStorage("userData");

    const sendMessagebyEnter = (event) => event.key === "Enter" && sendMessage();

    const sendMessage = () => {
        if (message && !message.split("").every((symbol) => symbol === " ")) {
            socket.emit("SEND_MESSAGE", {
                roomId: id,
                message: {
                    userName: name,
                    text: message,
                    id: uuid(),
                    time: getCurrentTime()
                }
            })
            setMessage("");
        }
    }

    return (
        <Container>
            <TextArea
                placeholder="Message"
                onKeyDown={sendMessagebyEnter}
                rows={1}
                onChange={(e) => setMessage(e.target.value)}
                value={message} />
            <SendBtn>
                <FontAwesomeIcon
                    onClick={sendMessage}
                    size="lg"
                    color="#55ea47d4"
                    icon={faLocationArrow} />
            </SendBtn>
        </Container>
    )
}