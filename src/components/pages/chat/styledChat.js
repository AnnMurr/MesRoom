import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    max-width: 60%;
    width: 100%;
    background-color: #101010;
    border-radius: 5px;
    height: 70%;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    height: 100%;
`

export const LeftBlock = styled.div`
    background-color: ##141414;
    padding: 40px;
    color: white;
`

export const RightBlock = styled.div`
    background-color: ##141414;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border-left: 2px solid #66666670;
`

export const RightBlockInner = styled.div`
    padding: 0 40px 0 40px;
    overflow: scroll;
`

export const MessageInner = styled.div`
    padding: 10px;
    color: white;
    overflow-wrap: anywhere;
`

export const MessageInnerOwn = styled.div`
    padding: 10px;
    color: white;
    width: fit-content;
    text-align: end;
    margin-left: auto;
    overflow-wrap: anywhere;
`

export const Message = styled.div`
    width: fit-content;
    background-color: #242121;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
`

export const MessageOwn = styled.div`
    width: fit-content;
    background-color: #3e9413;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
    margin-left: auto;
`

export const OnlineTitle = styled.h5`
    padding-bottom: 10px;
    font-size: 17px;
`

export const SubMessage = styled.div`
    font-size: 13px;
    opacity: 0.6;
    padding-top: 5px;
`
export const SendBtn = styled.button`
    position: absolute;
    right: 10px;
    top: 7px;
    right: 42px;
    top: 18px;
`

export const BlockSendMessage = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #242121;
    padding: 10px 30px 10px 30px;
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