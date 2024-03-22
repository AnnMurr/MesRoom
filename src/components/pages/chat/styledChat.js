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
    overflow-y: auto;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100%;
  background-color: #101010;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    grid-template-columns: none;
  }
`;

export const Burger = styled.button`
  width: fit-content;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 20;
`;
