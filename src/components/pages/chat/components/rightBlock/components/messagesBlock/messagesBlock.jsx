import React, { useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
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
    const containerRef = useRef(null)
    const { name } = getDataFromSessionStorage("userData");

    useEffect(() => {
        containerRef.current && containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }, [chatMessages])

    return (
        <Container ref={containerRef}>
            {chatMessages &&
                chatMessages.map((message) => (
                    <React.Fragment key={uuid()}>
                        {message.userName !== name ?
                            <MessageInner>
                                <Message><span>{message.text}</span></Message>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                            </MessageInner>
                            :
                            <MessageInnerOwn>
                                <MessageOwn><span>{message.text}</span></MessageOwn>
                                <SubMessage>{message.time} {message.userName}</SubMessage>
                            </MessageInnerOwn>}
                    </React.Fragment >
                ))}
        </Container>
    )
}