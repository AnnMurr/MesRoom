import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    display: contents;
`

export const Btn = styled.button`
    padding: 13px 0;
    border-radius: 2px;
    background-color: #55ea47d4; 
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out; 
    width: 100%;
    max-width: 230px;

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
