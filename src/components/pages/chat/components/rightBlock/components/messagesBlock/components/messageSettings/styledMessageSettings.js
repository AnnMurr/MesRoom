import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: #232121;
  z-index: 5;
  width: max-content;
  color: #fff;
  text-align: start;
  border-radius: 3px;
`;

export const Icon = styled.span`
  padding-right: 10px;
`;

export const Item = styled.li`
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #6b6b6b5c;
  }
`;

export const Btn = styled.button`
  color: #fff;
  padding: 10px;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20% 80%;
  text-align: start;
  gap: 10px;

  @media screen and (max-width: 520px) {
    padding: 8px 10px;
  }
`;

export const Text = styled.span`
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
`;