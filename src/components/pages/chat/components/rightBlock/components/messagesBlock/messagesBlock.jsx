import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { MessageSettings } from "./components/messageSettings/messageSettings";
import { getDataFromSessionStorage } from "../../../../../../../store/sessionStorage";
import {
    Container,
    Message,
    MessageInner,
    MessageInnerOwn,
    MessageOwn,
    SubMessage
} from "./styledMessagesBlock";

export const MessagesBlock = ({ chatMessages, setIsEditing, setMessage }) => {
    const [isMessageSettings, setIsMessageSettings] = useState(null);
    const [messageSettingsPosition, setMessageSettingsPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const { name } = getDataFromSessionStorage("userData");

    const closeMessageSettingsBlock = () => {
        setIsMessageSettings(null);
        window.removeEventListener("click", closeMessageSettingsBlock);
        containerRef.current.style.overflow = "scroll";
    }

    const openMessageSettings = (event) => {
        event.preventDefault();
        setMessageSettingsPosition({ x: event.clientX, y: event.clientY });
        setIsMessageSettings(event.currentTarget.id);
        containerRef.current.style.overflow = "hidden";

        window.addEventListener("click", closeMessageSettingsBlock);
    }

    useEffect(() => {
        containerRef.current && containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }, [chatMessages]);

    return (
        <Container ref={containerRef}>
            {chatMessages &&
                chatMessages.map((message) => (
                    <React.Fragment key={uuid()}>
                        {message.userName !== name ?
                            <MessageInner id={message.id} onContextMenu={openMessageSettings}>
                                <Message>
                                    <span>{message.text}</span>
                                </Message>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                                {isMessageSettings === message.id &&
                                    <MessageSettings
                                        setIsEditing={setIsEditing}
                                        messageSettingsPosition={messageSettingsPosition}
                                        type={"otherSettings"}
                                        messageId={message.id} />}
                            </MessageInner>
                            :
                            <MessageInnerOwn id={message.id} onContextMenu={openMessageSettings}>
                                <MessageOwn>
                                    <span>{message.text}</span>
                                </MessageOwn>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                                {isMessageSettings === message.id &&
                                    <MessageSettings
                                        setMessage={setMessage}
                                        messageText={message.text}
                                        setIsEditing={setIsEditing}
                                        messageSettingsPosition={messageSettingsPosition}
                                        type={"ownSettings"}
                                        messageId={message.id} />}
                            </MessageInnerOwn>}
                    </React.Fragment >
                ))}
        </Container>
    )
}