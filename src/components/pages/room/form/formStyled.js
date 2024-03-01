import styled from "styled-components";

export const Section = styled.section`
    height: 100%;
`

export const FormInner = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 15%;
    width: 100%;
`

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    background-color: transparent;
    border: 2px solid #ffffff96;
    border-radius: 5px;
    color: #fff;

    &:focus-visible {
        outline: 1px auto #00ff005c; 
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Btn = styled.button`
    padding: 7px 0;
    border-radius: 2px;
    background-color: #55ea47d4; 
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out; 

    &:hover {
        background-color: #7fffd4;
        background-image: linear-gradient(45deg, #7fffd4, #adff2f);
        background-size: 200% 200%;
        animation: gradientShift 1.5s ease infinite;
    }

    @keyframes gradientShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`
