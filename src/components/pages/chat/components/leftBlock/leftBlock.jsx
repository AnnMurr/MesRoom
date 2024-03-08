import { useEffect, useRef, useState } from "react";
import { EmojiBlock } from "../../../../common/emojiBlock/emojiBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { socket } from "../../../../../socket/socket";
import { v4 as uuid } from "uuid";
import { getDataFromSessionStorage, setDataToSessionStorage } from "../../../../../store/sessionStorage";
import { Container, OnlineTitle, Item, EditBtn } from "./styledLeftBlock";

export const LeftBlock = () => {
    const { id, name } = getDataFromSessionStorage("userData");
    const [usersOnline, setUsersOnline] = useState([]);
    const emojiBlockRef = useRef(null);
    const localData = getDataFromSessionStorage("userData");

    useEffect(() => {
        socket.on("usersOnline", (users) => setUsersOnline(users));
        socket.on("CHANGED-USERDATA", (data) => setUsersOnline(data));
    }, []);

    const openEmojiBlock = () => {
        const emojiBlocStyle = emojiBlockRef.current.style;
        emojiBlocStyle.opacity = emojiBlocStyle.opacity === "1" ? "0" : "1";
        emojiBlocStyle.visibility = emojiBlocStyle.opacity === "visible" ? "hidden" : "visible";
    }

    const selectEmoji = async (e) => {
        const newEmoji = e.target.textContent;
        e.preventDefault();

        socket.emit("CHANGE-USERICON", { id, name, newEmoji });

        localData.userEmoji = newEmoji;
        setDataToSessionStorage("userData", localData);
    };

    return (
        <Container>
            <div>
                <OnlineTitle>Online:</OnlineTitle>
                <ul>
                    {usersOnline &&
                        usersOnline.map((userData) => (
                            <Item key={uuid()}>
                                <span>{userData.icon}</span> {userData.name}
                                {userData.name.toLowerCase() === name.toLowerCase() ?
                                    <EditBtn onClick={openEmojiBlock}>
                                        {<FontAwesomeIcon size="sm" style={{ color: "lightgray" }} icon={faPen} />}
                                    </EditBtn>
                                    : null}
                                {userData.name.toLowerCase() === name.toLowerCase() ?
                                    <EmojiBlock emojiBlockRef={emojiBlockRef} selectEmoji={selectEmoji} />
                                    : null}
                            </Item>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}