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