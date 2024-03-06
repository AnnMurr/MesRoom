import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
    Container,
    Message,
    MessageInner,
    MessageInnerOwn,
    MessageOwn,
    SubMessage
} from "./styledMessagesBlock";

export const MessagesBlock = ({ chatMessages }) => {
    const location = useLocation();
    const { name } = location.state;
    
    return (
        <Container>
            {chatMessages &&
                chatMessages.map((message) => (
                    <>
                        {message.userName !== name ?
                            <MessageInner key={uuid()}>
                                <Message><span>{message.text}</span></Message>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                            </MessageInner>
                            :
                            <MessageInnerOwn key={uuid()}>
                                <MessageOwn><span>{message.text}</span></MessageOwn>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                            </MessageInnerOwn>}
                    </>
                ))
            }
        </Container>
    )
}