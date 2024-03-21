import { useEffect } from "react";
import { socket } from "../../../../../socket/socket";
import { getDataFromSessionStorage } from "../../../../../store/sessionStorage";
import { BlockSendMessage } from "./components/blockSendMessage/blockSendMessage";
import { MessagesBlock } from "./components/messagesBlock/messagesBlock";
import { Container } from "./styledRightBlock";

export const RightBlock = () => {
    const { id, name, userEmoji } = getDataFromSessionStorage("userData");

    useEffect(() => {
        return () => {
            socket.emit("ROOM:LEAVE", {
                roomId: id,
                userName: {
                    name: name,
                    icon: userEmoji
                }
            });
            socket.disconnect();
        }
    }, [id, name, userEmoji]);

    return (
        <Container>
            <MessagesBlock />
            <BlockSendMessage />
        </Container>
    )
}