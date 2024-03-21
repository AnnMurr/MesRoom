import { useRef } from "react";
import { EmojiBlock } from "../../../../../common/emojiBlock/emojiBlock";
import { Emoji } from "./styledEmoji";

export const EmojiComponent = ({ userEmoji, setUserEmoji }) => {
    const emojiBlockRef = useRef(null);
    const emojRef = useRef(null);
    const windowWidth = window.innerWidth;

    const selectEmoji = (e) => {
        e.preventDefault();
        setUserEmoji(e.target.textContent);
    };

    const closeEmojiBlockByClickOutside = (event) => {
        if (!emojiBlockRef.current.contains(event.target) &&
            !emojRef.current.contains(event.target)) {
            openEmojiBlock()
            window.removeEventListener("click", closeEmojiBlockByClickOutside);
        }
    }

    const openEmojiBlock = () => {
        const { style } = emojiBlockRef.current;
        
        if (style.opacity === "1" && style.visibility === "visible") {
            style.opacity = "0";
            style.visibility = "hidden";
        } else {
            style.opacity = "1";
            style.visibility = "visible";
            window.addEventListener("click", closeEmojiBlockByClickOutside);
        }
    }

    return (
        <>
            <Emoji
                ref={emojRef}
                onClick={windowWidth <= 1024 ? openEmojiBlock : null}>
                {userEmoji}
            </Emoji>
            <EmojiBlock emojiBlockRef={emojiBlockRef} selectEmoji={selectEmoji} />
        </>
    )
}