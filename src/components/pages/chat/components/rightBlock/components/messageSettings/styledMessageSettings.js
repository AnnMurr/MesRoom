import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 1em;
  right: ${({ type }) => (type === "ownSettings" ? "2em" : "")};
  left: ${({ type }) => (type === "otherSettings" ? "2em" : "")};
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
  padding: 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #6b6b6b5c;
  }
`;
