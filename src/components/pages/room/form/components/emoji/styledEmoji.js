import styled from "styled-components";
import { EmojiBlockContainer } from "../../../../../common/emojiBlock/styledEmojiBlock";

export const Emoji = styled.div`
    padding-top: 10px;
    position: absolute;
    font-size: 18px;
    left: 3%;
    cursor: pointer;
    width: fit-content;
    opacity: 1;
    z-index: 5;

    &:hover + ${EmojiBlockContainer} {
        opacity: 1; 
        visibility: visible; 
    }
`