import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../../../socket/socket";
import { LeftBlock } from "./components/leftBlock/leftBlock";
import { RightBlock } from "./components/rightBlock/rightBlock";
import { Container, Section, Wrapper } from "./styledChat";

export const Chat = () => {
    const [usersOnline, setUsersOnline] = useState([]);
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const location = useLocation();
    const { id, name, userEmoji } = location.state;

    useEffect(() => {
        socket.emit("ROOM:JOIN", { roomId: id, userName: { name: name, icon: userEmoji } });
        socket.on("usersOnline", (users) => setUsersOnline(users));
        socket.on("chatMessages", (messages) =>  setChatMessages(messages));

        const handleUnload = () => socket.emit("ROOM:LEAVE", { 
            roomId: id, 
            userName: { 
                name: name, 
                icon: userEmoji 
            } 
        });

        window.addEventListener("beforeunload", handleUnload);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);

            socket.emit("ROOM:LEAVE", {
                roomId: id, 
                userName: { 
                    name: name, 
                    icon: userEmoji 
                } 
            });
            socket.disconnect();
        };
    }, [location.pathname]);

    return (
        <Section>
            <Container>
                <Wrapper>
                   <LeftBlock usersOnline={usersOnline} />
                   <RightBlock 
                   chatMessages={chatMessages} 
                   setMessage={setMessage} 
                   message={message} />
                </Wrapper>
            </Container>
        </Section>
    )
}