import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 15%;
    align-items: center;
`

export const BtnInner = styled.div`
    max-width: 20%;
    width: 100%
`

export const LinkWrapper = styled.div`
    padding: 20px;
    margin-top: 60px;
    background-color: #dce3e9;
    align-items: center;
    max-width: 45%;
    width: 100%;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    text-align: center;
    border-radius: 2px;
`

export const TitleLink = styled.h5`
    font-size: 17px;
`

export const CopyBtn = styled.button`
    margin-left: 15px;
`

export const Btn = styled.button`
    padding: 15px;
    border-radius: 2px;
    background-color: #55ea47d4;
    cursor: pointer;
    font-weight: 700;
  
    width: 100%;
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