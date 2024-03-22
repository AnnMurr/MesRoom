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
    const touchTimeoutRef = useRef(null);
    const windowWidth = window.innerWidth;

    const closeMessageSettingsBlock = () => {
        setIsMessageSettings(null);
        window.removeEventListener("click", closeMessageSettingsBlock);
        containerRef.current.style.overflow = "scroll";
    }

    const openMessageSettings = (event, id) => {
        if (windowWidth <= 1023 && event.touches && event.touches.length > 0) {
            const touch = event.touches[0];
            setMessageSettingsPosition({ x: touch.clientX, y: touch.clientY });
        } else {
            setMessageSettingsPosition({ x: event.clientX, y: event.clientY });
        }

        setIsMessageSettings(id);
        containerRef.current.style.overflow = "hidden";

        window.addEventListener("click", closeMessageSettingsBlock);
    }

    useEffect(() => {
        containerRef.current && containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }, [chatMessages]);

    const handleTouchStart = (event, message) => {
        touchTimeoutRef.current = setTimeout(() => {
            openMessageSettings(event, message.id);
        }, 500);
    };

    const handleTouchEnd = () => {
        clearTimeout(touchTimeoutRef.current);
    };

    return (
        <Container ref={containerRef}>
            {chatMessages &&
                chatMessages.map((message) => (
                    <React.Fragment key={uuid()}>
                        {message.userName !== name ?
                            <MessageInner
                                id={message.id}
                                onContextMenu={(event) => {
                                    event.preventDefault()
                                    if (windowWidth > 1023) {
                                        openMessageSettings(event, message.id)
                                    }
                                }}
                                onTouchStart={(event) => handleTouchStart(event, message)}
                                onTouchEnd={handleTouchEnd}>
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
                            <MessageInnerOwn
                                id={message.id}
                                onContextMenu={(event) => {
                                    event.preventDefault()
                                    if (windowWidth > 1023) {
                                        openMessageSettings(event, message.id)
                                    }
                                }}
                                onTouchStart={(event) => handleTouchStart(event, message)}
                                onTouchEnd={handleTouchEnd}
                            >
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