import styled from "styled-components";

export const EmojiBlock = styled.div`
    opacity: 0; 
    visibility: hidden; 
    transition: all 0.8s ease-in-out;
    position: absolute;
    width: 100%;
    background-color: #2c2c2c;
    border-radius: 5px;
    padding: 5px;
    left: 0;
    top: -130px;

    &:hover {
        opacity: 1; 
        visibility: visible; 
    }
`

export const Emoji = styled.div`
    padding-top: 10px;
    position: absolute;
    font-size: 18px;
    left: 3%;
    cursor: pointer;
    width: fit-content;
    opacity: 1;
    z-index: 5;

    &:hover + ${EmojiBlock} {
        opacity: 1; 
        visibility: visible; 
    }
`

export const EmojiList = styled.ul`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    text-align: center;
    max-height: 110px;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
`

export const EmojiItem = styled.div`
    display: inline-block;
`

export const EmojiItemBtn = styled.button`
    cursor: pointer;
`