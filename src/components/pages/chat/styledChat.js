import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 55rem;
  margin: 0 auto;
  padding: 0 15px;
  height: 70vh;

  @media screen and (max-width: 768px) {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100dvh;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100%;
  background-color: #101010;
  border-radius: 5px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 30% 70%;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 35% 65%;
  }
`;
