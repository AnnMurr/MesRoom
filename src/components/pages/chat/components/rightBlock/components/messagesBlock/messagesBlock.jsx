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
    MessageText,
    SubMessage
} from "./styledMessagesBlock";
import { useSelector } from "react-redux";

export const MessagesBlock = () => {
    const [isMessageSettings, setIsMessageSettings] = useState(null);
    const [messageSettingsPosition, setMessageSettingsPosition] = useState({ x: 0, y: 0 });
    const { name } = getDataFromSessionStorage("userData");
    const { chatMessages } = useSelector(state => state.chatData);
    const containerRef = useRef(null);

    const closeMessageSettingsBlock = () => {
        setIsMessageSettings(null);
        containerRef.current.style.overflow = "scroll";
    }

    const openMessageSettings = (messageId) => {
        return (event) => {
            event.preventDefault();
            setMessageSettingsPosition({ x: event.clientX, y: event.clientY });
            setIsMessageSettings(messageId);
            containerRef.current.style.overflow = "hidden";
            window.addEventListener("click", closeMessageSettingsBlock);
        };
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
                            <MessageInner id={message.id} onContextMenu={openMessageSettings(message.id)}>
                                <Message>
                                    <MessageText>{message.text}</MessageText>
                                </Message>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                                {isMessageSettings === message.id &&
                                    <MessageSettings
                                        messageText={message.text}
                                        messageSettingsPosition={messageSettingsPosition}
                                        type={"otherSettings"}
                                        messageId={message.id} />}
                            </MessageInner>
                            :
                            <MessageInnerOwn id={message.id} onContextMenu={openMessageSettings(message.id)}>
                                <MessageOwn>
                                    <MessageText>{message.text}</MessageText>
                                </MessageOwn>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                                {isMessageSettings === message.id &&
                                    <MessageSettings
                                        messageText={message.text}
                                        messageSettingsPosition={messageSettingsPosition}
                                        type={"ownSettings"}
                                        messageId={message.id} />}
                            </MessageInnerOwn>}
                    </React.Fragment >
                ))}
        </Container>
    )
}
