import { useState } from "react";
import { BlockSendMessage } from "./components/blockSendMessage/blockSendMessage";
import { MessagesBlock } from "./components/messagesBlock/messagesBlock";
import { Container } from "./styledRightBlock";

export const RightBlock = ({ setMessage, message, chatMessages, setChatMessages }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Container>
            <MessagesBlock setMessage={setMessage} setIsEditing={setIsEditing} chatMessages={chatMessages} />
            <BlockSendMessage
                setChatMessages={setChatMessages}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
                message={message}
                setMessage={setMessage} />
        </Container>
    )
}