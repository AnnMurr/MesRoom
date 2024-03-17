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
