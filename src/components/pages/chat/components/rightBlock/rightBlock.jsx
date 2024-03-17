import { useState } from "react";
import { BlockSendMessage } from "./components/blockSendMessage/blockSendMessage";
import { MessagesBlock } from "./components/messagesBlock/messagesBlock";
import { Container } from "./styledRightBlock";

export const RightBlock = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Container>
            <MessagesBlock setIsEditing={setIsEditing} />
            <BlockSendMessage setIsEditing={setIsEditing} isEditing={isEditing} />
        </Container>
    )
}