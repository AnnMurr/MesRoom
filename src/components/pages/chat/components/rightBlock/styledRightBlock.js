import styled from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-left: 2px solid #66666670;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;
