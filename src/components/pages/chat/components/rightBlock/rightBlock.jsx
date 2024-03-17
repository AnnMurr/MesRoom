import { BlockSendMessage } from "./components/blockSendMessage/blockSendMessage";
import { MessagesBlock } from "./components/messagesBlock/messagesBlock";
import { Container } from "./styledRightBlock";

export const RightBlock = () => {
    return (
        <Container>
            <MessagesBlock />
            <BlockSendMessage />
        </Container>
    )
}