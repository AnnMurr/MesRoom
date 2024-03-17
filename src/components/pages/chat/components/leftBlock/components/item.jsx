import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { checkUserIcon } from "../../../../../../api/checkUserData";
import { socket } from "../../../../../../socket/socket";
import { getDataFromSessionStorage, setDataToSessionStorage } from "../../../../../../store/sessionStorage";
import { EmojiBlock } from "../../../../../common/emojiBlock/emojiBlock";
import { EditBtn, IconBtn, TextContent, Wrapper } from "./styledItem";

export const Item = ({ setIsErrorAlert, userData }) => {
    const windowWidth = window.innerWidth;
    const emojiBlockRef = useRef(null);
    const editBtnRef = useRef(null);
    const iconBtnRef = useRef(null);

    const { id, name } = getDataFromSessionStorage("userData");
    const dataFromLocalStorage = getDataFromSessionStorage("userData");

    const selectEmoji = async (event) => {
        const selectedEmoji = event.target.textContent;
        const isEmoji = await checkUserIcon(id, selectedEmoji);

        if (isEmoji) {
            setIsErrorAlert(true);
            setTimeout(() => setIsErrorAlert(false), 3000);
        } else {
            const newEmoji = selectedEmoji;
            event.preventDefault();

            socket.emit("CHANGE-USERICON", { id, name, newEmoji });

            dataFromLocalStorage.userEmoji = newEmoji;
            setDataToSessionStorage("userData", dataFromLocalStorage);
            document.removeEventListener("click", closeEmojiBlockByClickOutside);
        }
    };

    const closeEmojiBlockByClickOutside = (event) => {
        if (emojiBlockRef.current && !emojiBlockRef.current.contains(event.target)
            && !editBtnRef.current.contains(event.target) && !iconBtnRef.current.contains(event.target)) {
            openEmojiBlock();
        }
    }

    const openEmojiBlock = () => {
        const emojiBlocStyle = emojiBlockRef.current.style;
        emojiBlocStyle.opacity = emojiBlocStyle.opacity === "1" ? "0" : "1";
        emojiBlocStyle.visibility = emojiBlocStyle.visibility === "visible" ? "hidden" : "visible";

        emojiBlocStyle.visibility === "visible" ?
            document.addEventListener("click", closeEmojiBlockByClickOutside) :
            document.removeEventListener("click", closeEmojiBlockByClickOutside);
    }

    return (
        <Wrapper>
            <TextContent>
                <IconBtn
                    ref={iconBtnRef}
                    type="button"
                    onClick={() => windowWidth <= 1024 && openEmojiBlock()}>
                    {userData.icon}
                </IconBtn>
                {userData.name}
            </TextContent>
            {userData.name.toLowerCase() === name.toLowerCase() ?
                <EditBtn ref={editBtnRef} onClick={openEmojiBlock}>
                    {<FontAwesomeIcon
                        size="sm"
                        style={{ color: "lightgray" }}
                        icon={faPen} />}
                </EditBtn>
                : null}
            {userData.name.toLowerCase() === name.toLowerCase() ?
                <EmojiBlock
                    type={"chatBlock"}
                    emojiBlockRef={emojiBlockRef}
                    selectEmoji={selectEmoji} />
                : null}
        </Wrapper>
    )
}