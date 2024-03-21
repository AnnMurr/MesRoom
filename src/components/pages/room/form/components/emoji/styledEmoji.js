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
  color: #fff;
  line-height: 18px;

  @media screen and (min-width: 1024px) {
    &:hover + ${EmojiBlockContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
