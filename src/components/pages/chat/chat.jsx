import { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { LeftBlock } from "./components/leftBlock/leftBlock";
import { RightBlock } from "./components/rightBlock/rightBlock";
import { getDataFromSessionStorage } from "../../../store/sessionStorage";
import { Container, Section, Wrapper } from "./styledChat";
import { LoadingPage } from "../loading/loading";

export const Chat = () => {
    const [usersOnline, setUsersOnline] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    const [message, setMessage] = useState("");
    const { id, name, userEmoji } = getDataFromSessionStorage("userData");

    useEffect(() => {
        setTimeout(() => setIsLoad(false), 4000);

        socket.emit("ROOM:JOIN", { roomId: id, userName: { name: name, icon: userEmoji ? userEmoji : userEmoji } });
        socket.on("usersOnline", (users) => setUsersOnline(users));
        socket.on("chatMessages", (messages) => setChatMessages(messages));
        socket.on("changed-messages", (messages) => setChatMessages(messages));
        
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
    }, []);

    return (
        <Section>
            <Container>
                {isLoad ? <LoadingPage /> : null}
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