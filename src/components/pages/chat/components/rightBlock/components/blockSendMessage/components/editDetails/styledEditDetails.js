import styled from "styled-components";

export const EditDetails = styled.div`
    color: white;
    border-top: 1px solid #383838;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;

    &span {
        font-size: 14px;
        color: #bebcb9;
    }
`

export const Inner = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 10px;
`

export const EditableMessage = styled.span`
        font-size: 14px;
        color: #bebcb9;
`