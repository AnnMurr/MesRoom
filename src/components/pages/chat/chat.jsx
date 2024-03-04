import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Container, LeftBlock, RightBlock, Section, Wrapper, SubMessage, Message, MessageInner, Input, BlockSendMessage, SendBtn } from "./styledChat";
import { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { useLocation } from "react-router-dom";

export const Chat = () => {
    const [usersOnline, setUsersOnline] = useState([])
    const [message, setMessage] = useState("")
    const [chatMessages, setChatMessages] = useState([])
    const location = useLocation()

    const sendMessage = () => {
        const locationArray = location.pathname.split('/')
        const userName = locationArray[locationArray.length - 1];
        const id = locationArray[locationArray.length - 2];
        socket.emit("SEND_MESSAGE", { roomId: id, message:  { userName: userName, text: message } })
        setMessage("")
    }

    useEffect(() => {
        const locationArray = location.pathname.split('/')
        const userName = locationArray[locationArray.length - 1];
        const id = locationArray[locationArray.length - 2];

        socket.emit("ROOM:JOIN", { roomId: id, userName: userName })

        socket.on("usersOnline", (users) => {
            setUsersOnline(users)
        })

        socket.on("chatMessages", (messages) => {
            setChatMessages(messages)
        })

        const handleUnload = () => socket.emit("ROOM:LEAVE", { roomId: id, userName: userName })

        window.addEventListener("beforeunload", handleUnload)

        return () => {
            window.removeEventListener("beforeunload", handleUnload)

            socket.emit("ROOM:LEAVE", { roomId: id, userName: userName })
            socket.disconnect();
        };
    }, [])

    console.log(chatMessages)

    return (
        <Section>
            <Container>
                <Wrapper>
                    <LeftBlock>
                        <div>
                            <h5>Online:</h5>
                            <ul>
                                {usersOnline &&
                                    usersOnline.map((user, id) => (
                                        <li key={id}>{user}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </LeftBlock>

                    <RightBlock>
                        <div>
                            {chatMessages &&
                                chatMessages.map((message, id) => (
                                    
                                    <MessageInner key={id}>
                                        <Message><span>{message.text}</span></Message>
                                        <SubMessage>{message.userName}</SubMessage>
                                    </MessageInner>
                                ))
                            }
                        </div>
                        <BlockSendMessage>
                            <Input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
                            <SendBtn>
                                <FontAwesomeIcon onClick={sendMessage} size="xl" color="#55ea47d4" icon={faLocationArrow} />
                            </SendBtn>
                        </BlockSendMessage>
                    </RightBlock>
                </Wrapper>
            </Container>
        </Section>
    )
}