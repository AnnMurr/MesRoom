import styled from "styled-components";

export const Container = styled.div`
    background-color: #141414;
    padding: 40px 30px 40px 30px;
    color: white;
`

export const OnlineTitle = styled.h5`
    padding-bottom: 10px;
    font-size: 17px;
`

export const EditBtn = styled.button`
    margin-left: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in;
`

export const Item = styled.li`
    cursor: pointer;
    position: relative;
    padding-bottom: 5px;

    &:hover > ${EditBtn} {
        opacity: 1;
        visibility: visible;
    }
`