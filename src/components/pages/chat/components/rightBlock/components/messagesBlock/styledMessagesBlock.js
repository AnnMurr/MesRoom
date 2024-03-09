import styled from "styled-components";

export const Container = styled.div`
    padding: 0 40px 0 40px;
    overflow: scroll;
`

export const MessageInner = styled.div`
    position: relative;
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
    position: relative;
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

export const SubMessage = styled.div`
    font-size: 13px;
    opacity: 0.6;
    padding-top: 5px;
`