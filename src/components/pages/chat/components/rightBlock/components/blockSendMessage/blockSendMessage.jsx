import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { socket } from "../../../../../../../socket/socket";
import { Container, SendBtn, TextArea } from "./styledBlockSendMessage";

export const BlockSendMessage = ({ setMessage, message }) => {
    const location = useLocation();
    const { id, name } = location.state;

    const sendMessagebyEnter = (event) => event.key === "Enter" && sendMessage();

    const sendMessage = () => {
        socket.emit("SEND_MESSAGE", {
            roomId: id,
            message: {
                userName: name,
                text: message,
                time: `${new Date().getHours()}:${new Date().getMinutes()} `
            }
        })
        setMessage("");
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