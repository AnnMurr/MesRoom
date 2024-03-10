import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { MessageSettings } from "../messageSettings/messageSettings";
import { getDataFromSessionStorage } from "../../../../../../../store/sessionStorage";
import {
    Container,
    Message,
    MessageInner,
    MessageInnerOwn,
    MessageOwn,
    SubMessage
} from "./styledMessagesBlock";

export const MessagesBlock = ({ chatMessages }) => {
    const [isMessageSettings, setIsMessageSettings] = useState(null)
    const containerRef = useRef(null)
    const { name } = getDataFromSessionStorage("userData");

    const openMessageSettings = (event) => {
        event.preventDefault();
        setIsMessageSettings(event.currentTarget.id)
    }

    useEffect(() => {
        containerRef.current && containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }, [chatMessages])

    return (
        <Container ref={containerRef}>
            {chatMessages &&
                chatMessages.map((message) => (
                    <React.Fragment key={uuid()}>
                        {message.userName !== name ?
                            <MessageInner id={message.id} onContextMenu={openMessageSettings}>
                                <Message><span>{message.text}</span></Message>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                                {isMessageSettings === message.id && <MessageSettings type={"otherSettings"} messageId={message.id} />}
                            </MessageInner>
                            :
                            <MessageInnerOwn id={message.id} onContextMenu={openMessageSettings}>
                                <MessageOwn><span>{message.text}</span></MessageOwn>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                                {isMessageSettings === message.id && <MessageSettings type={"ownSettings"} messageId={message.id} />}
                            </MessageInnerOwn>}
                    </React.Fragment >
                ))}
        </Container>
    )
}