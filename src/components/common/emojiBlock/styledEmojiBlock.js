import styled from "styled-components";

export const EmojiBlockContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  position: absolute;
  width: ${({ type }) => (type === "chatBlock" ? "155px" : "100%")};
  background-color: #2c2c2c;
  border-radius: 5px;
  padding: 5px;
  left: 0;
  top: -130px;

  @media screen and (max-width: 760px) {
    width: ${({ type }) => (type === "chatBlock" ? "122px" : "100%")};
    width: ;
  }

  @media screen and (max-width: 520px) {
    width: ${({ type }) => (type === "chatBlock" ? "100px" : "100%")};
    width: ;
  }

  &:hover {
    opacity: 1;
    visibility: visible;
  }
`;

export const EmojiList = styled.ul`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  text-align: center;
  max-height: 110px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
`;
