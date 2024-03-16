import styled from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  padding: 40px 30px 40px 30px;
  color: white;

  @media screen and (max-width: 520px) {
    padding: 30px 10px 30px 15px;
  }
`;

export const OnlineTitle = styled.h5`
  padding-bottom: 10px;
  font-size: 17px;

  @media screen and (max-width: 520px) {
    font-size: 15px;
  }
`;

export const EditBtn = styled.button`
  margin-left: 10px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  padding-bottom: 5px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

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