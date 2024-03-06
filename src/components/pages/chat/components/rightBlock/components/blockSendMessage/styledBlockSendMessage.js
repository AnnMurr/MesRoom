import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #242121;
    padding: 10px 30px 10px 30px;
`

export const SendBtn = styled.button`
    position: absolute;
    right: 10px;
    top: 7px;
    right: 42px;
    top: 18px;
`

export const TextArea = styled.textarea`
    width: 100%;
    border-radius: 10px;
    padding: 7px 33px 7px 15px;
    background-color: #101010;
    border: none;
    color: #fff;
    resize: none;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;

    &:focus-visible {
        outline: 1px auto #00ff005c;
    }
`