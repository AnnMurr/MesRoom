import { useEffect, useRef, useState } from "react";
import { EmojiBlock } from "../../../../common/emojiBlock/emojiBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { socket } from "../../../../../socket/socket";
import { v4 as uuid } from "uuid";
import { getDataFromSessionStorage, setDataToSessionStorage } from "../../../../../store/sessionStorage";
import { Container, OnlineTitle, Item, EditBtn } from "./styledLeftBlock";
import { checkUserIcon } from "../../../../../api/checkUserData";

export const LeftBlock = () => {
    const { id, name } = getDataFromSessionStorage("userData");
    const [usersOnline, setUsersOnline] = useState([]);
    const emojiBlockRef = useRef(null);
    const editBtnRef = useRef(null);
    const dataFromLocalStorage = getDataFromSessionStorage("userData");

    const closeEmojiBlockByClickOutside = (event) => {
        if (!emojiBlockRef.current.contains(event.target)
            && !editBtnRef.current.contains(event.target)) {
            openEmojiBlock()
        }
    }

    useEffect(() => {
        socket.on("usersOnline", (users) => setUsersOnline(users));
        socket.on("CHANGED-USERDATA", (data) => setUsersOnline(data));
    }, []);

    const openEmojiBlock = () => {
        const emojiBlocStyle = emojiBlockRef.current.style;
        emojiBlocStyle.opacity = emojiBlocStyle.opacity === "1" ? "0" : "1";
        emojiBlocStyle.visibility = emojiBlocStyle.visibility === "visible" ? "hidden" : "visible";

        emojiBlocStyle.visibility === "visible" ?
        document.addEventListener("click", closeEmojiBlockByClickOutside) :
        document.removeEventListener("click", closeEmojiBlockByClickOutside)
    }

    const selectEmoji = async (event) => {
        const selectedEmoji = event.target.textContent;
        const isEmoji = await checkUserIcon(id, selectedEmoji);

        if(isEmoji) {
           console.log("emoji err")
        } else {
            const newEmoji = selectedEmoji;
            event.preventDefault();
    
            socket.emit("CHANGE-USERICON", { id, name, newEmoji });
    
            dataFromLocalStorage.userEmoji = newEmoji;
            setDataToSessionStorage("userData", dataFromLocalStorage);
        }
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
                                    <EditBtn ref={editBtnRef} onClick={openEmojiBlock}>
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