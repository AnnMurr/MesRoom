import styled from "styled-components";

export const TextArea = styled.textarea`
  max-height: 300px;
  width: 100%;
  border-radius: 10px;
  padding: 7px 40px 7px 15px;
  background-color: #101010;
  border: none;
  color: #fff;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  min-height: 33px;
  resize: none;
  touch-action: manipulation;

  &:focus-visible {
    outline: 1px auto #00ff005c;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SendBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 7px;
  right: 42px;
  top: 18px;
`;

export const AddEditBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 7px;
  right: 42px;
  top: 18px;
`;