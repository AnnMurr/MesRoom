import { BlockSendMessage } from "./components/blockSendMessage/blockSendMessage";
import { MessagesBlock } from "./components/messagesBlock/messagesBlock";
import { Container } from "./styledRightBlock";

export const RightBlock = ({ setMessage, message, chatMessages }) => {
    return (
        <Container>
            <MessagesBlock chatMessages={chatMessages} />
            <BlockSendMessage message={message} setMessage={setMessage} />
        </Container>
    )
}