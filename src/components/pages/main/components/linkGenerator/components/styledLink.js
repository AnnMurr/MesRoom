import styled from "styled-components";

export const LinkWrapper = styled.div`
    padding: 20px;
    margin-top: 60px;
    background-color: #dce3e9;
    align-items: center;
    max-width: 40rem;
    width: 100%;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    text-align: center;
    border-radius: 2px;

  @media screen and (max-width: 640px) {
    font-size: 12px;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 10% 80% 10%;
  }
`

export const TitleLink = styled.h5`
    font-size: 17px;

    @media screen and (max-width: 640px) {
      font-size: 14px;
    }
`

export const CopyBtn = styled.button`
    margin-left: 15px;
`