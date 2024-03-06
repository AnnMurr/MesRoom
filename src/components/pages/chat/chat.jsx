import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Container, LeftBlock, RightBlock, Section, Wrapper, OnlineTitle, SubMessage, Message, MessageInner, TextArea, BlockSendMessage, SendBtn, MessageInnerOwn, MessageOwn, RightBlockInner } from "./styledChat";
import { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const Chat = () => {
    const [usersOnline, setUsersOnline] = useState([])
    const [message, setMessage] = useState("")
    const [chatMessages, setChatMessages] = useState([])
    const location = useLocation()
    const { id, name, userEmoji } = location.state

    const sendMessagebyEnter = (event) => event.key === "Enter" && sendMessage()

    const sendMessage = () => {
        const locationArray = location.pathname.split('/')
        const userName = locationArray[locationArray.length - 1];
        const id = locationArray[locationArray.length - 2];
        socket.emit("SEND_MESSAGE", { roomId: id, message: { userName: userName, text: message, time: `${new Date().getHours()}:${new Date().getMinutes()} `} })
        setMessage("")
    }

    useEffect(() => {
        // const locationArray = location.pathname.split('/')
        // const userName = locationArray[locationArray.length - 1];
        // const id = locationArray[locationArray.length - 2];

        socket.emit("ROOM:JOIN", { roomId: id, userName: { name: name, icon: userEmoji } })

        socket.on("usersOnline", (users) => {
            setUsersOnline(users)
        })

        socket.on("chatMessages", (messages) => {
            setChatMessages(messages)
        })

        const handleUnload = () => socket.emit("ROOM:LEAVE", { roomId: id, userName: { name: name, icon: userEmoji } })

        window.addEventListener("beforeunload", handleUnload)

        return () => {
            window.removeEventListener("beforeunload", handleUnload)

            socket.emit("ROOM:LEAVE", { roomId: id, userName: { name: name, icon: userEmoji } })
            socket.disconnect();
        };
    }, [location.pathname])

    return (
        <Section>
            <Container>
                <Wrapper>
                    <LeftBlock>
                        <div>
                            <OnlineTitle>Online:</OnlineTitle>
                            <ul>
                                {usersOnline &&
                                    usersOnline.map((userData) => (
                                        <li key={uuid()}> <span>{userData.icon}</span> {userData.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </LeftBlock>
                    <RightBlock>
                        <RightBlockInner>
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
                        </RightBlockInner>
                        <BlockSendMessage>
                            <TextArea 
                            placeholder="Message" 
                            onKeyDown={sendMessagebyEnter} 
                            rows={1} 
                            onChange={(e) => setMessage(e.target.value)} 
                            value={message} />
                            <SendBtn>
                                <FontAwesomeIcon 
                                onClick={sendMessage} 
                                size="lg" 
                                color="#55ea47d4" 
                                icon={faLocationArrow} />
                            </SendBtn>
                        </BlockSendMessage>
                    </RightBlock>
                </Wrapper>
            </Container>
        </Section>
    )
}