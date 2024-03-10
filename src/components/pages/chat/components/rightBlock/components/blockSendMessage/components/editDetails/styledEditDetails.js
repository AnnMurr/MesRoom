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
`;

export const Inner = styled.div`
  margin: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const EditableMessage = styled.span`
  font-size: 14px;
  color: #bebcb9;
`;
