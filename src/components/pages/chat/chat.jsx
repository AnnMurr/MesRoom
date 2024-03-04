import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Container, LeftBlock, RightBlock, Section, Wrapper, Message, MessageInner, Input, BlockSendMessage, SendBtn } from "./styledChat";
import { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { useLocation } from "react-router-dom";

export const Chat = () => {
    const location = useLocation()
    const [usersOnline, setUsersOnline] = useState([])

    useEffect(() => {
        const locationArray = location.pathname.split('/')
        const userName = locationArray[locationArray.length - 1];
        const id = locationArray[locationArray.length - 2];

        socket.emit("ROOM:JOIN", { roomId: id, userName: userName })

        socket.on("usersOnline", (users) => {
            setUsersOnline(users)
        })

        const handleUnload =() =>  socket.emit("ROOM:LEAVE", { roomId: id, userName: userName})

        window.addEventListener("beforeunload", handleUnload)

        return () => {
            window.removeEventListener("beforeunload", handleUnload)
    
            socket.emit("ROOM:LEAVE", { roomId: id, userName: userName})
            socket.disconnect();
        };
    }, [])

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
                            <MessageInner>
                                <Message><span>Lorem ipsum dolor sit amet.</span></Message>
                            </MessageInner>
                            <MessageInner>
                                <Message><span>Lorem ipsum dolor sit amet.</span></Message>
                            </MessageInner>
                            <MessageInner>
                                <Message><span>Lorem ipsum dolor sit amet.</span></Message>
                            </MessageInner>
                        </div>
                        <BlockSendMessage>
                            <Input type="text" />
                            <SendBtn>
                                <FontAwesomeIcon size="xl" color="#55ea47d4" icon={faLocationArrow} />
                            </SendBtn>
                        </BlockSendMessage>
                    </RightBlock>
                </Wrapper>
            </Container>
        </Section>
    )
}