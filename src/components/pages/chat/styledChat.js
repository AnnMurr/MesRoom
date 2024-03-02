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
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 2px solid #66666670;
`

export const Message = styled.div`
    padding: 10px;
    color: white;
`
export const SendBtn = styled.button`
    position: absolute;
    right: 10px;
    top: 5px;
`

export const BlockSendMessage = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    padding: 7px;
    background-color: #242121;
    border: none;
    color: #747474;
`