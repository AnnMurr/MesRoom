import styled from "styled-components";

export const EditBtn = styled.button`
  margin-left: 10px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Wrapper = styled.li`
  cursor: pointer;
  padding-bottom: 5px;
  white-space: nowrap;
  display: flex;
  text-overflow: ellipsis;
  position: relative;

  @media screen and (max-width: 520px) {
    font-size: 13px;
  }

  &:hover > ${EditBtn} {
    opacity: 1;
    visibility: visible;
  }
`;

export const IconBtn = styled.button`
  color: #fff;
  margin-right: 8px;
  width: 20px;

  @media screen and (max-width: 520px) {
    margin-right: 5px;
    width: 15px;
  }
`;

export const TextContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;
