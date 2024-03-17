import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChatMessages } from "../../../redux/redusers/userReduser";
import { socket } from "../../../socket/socket";
import { LeftBlock } from "./components/leftBlock/leftBlock";
import { RightBlock } from "./components/rightBlock/rightBlock";
import { LoadingPage } from "../loading/loading";
import { getDataFromSessionStorage } from "../../../store/sessionStorage";
import { Container, Section, Wrapper } from "./styledChat";

export const Chat = () => {
    const [isLoad, setIsLoad] = useState(true);
    const { id, name, userEmoji } = getDataFromSessionStorage("userData");
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => setIsLoad(false), 4000);

        socket.emit("ROOM:JOIN", { roomId: id, userName: { name: name, icon: userEmoji ? userEmoji : userEmoji } });
        socket.on("chatMessages", (messages) => dispatch(setChatMessages(messages)));
        socket.on("changed-messages", (messages) => dispatch(setChatMessages(messages)));

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
                    <LeftBlock />
                    <RightBlock />
                </Wrapper>
            </Container>
        </Section>
    )
}