import styled from "styled-components";

export const Section = styled.section`
    height: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Wrapper = styled.div`
    position: relative;
    max-width: 15%;
    width: 100%;
`

export const FormInner = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    position: relative;
`

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

export const Emoji = styled.button`
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

export const Input = styled.input`
    margin-bottom: 20px;
    background-color: transparent;
    color: #fff;
    width: 100%;   
    border: none;
    border-bottom: 1px solid #ffffff96;
    padding: 10px 10px 10px 40px;

    &:focus-visible {
        outline: 1px auto #00ff005c; 
    }
`
