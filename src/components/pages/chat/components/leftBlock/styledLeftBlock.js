import styled, { keyframes } from "styled-components";

const open = keyframes`
0% {
  left: -300px;
}

100% {
  left: 0;
}
`;

const hide = keyframes`
0% {
  left: 0;
}

100% {
  left: -550px;
}
`;

export const Container = styled.div`
  background-color: #141414;
  padding: 40px 30px 40px 30px;
  color: white;

  @media screen and (max-width: 768px) {
    z-index: 30;
    width: 70%;
    position: absolute;
    height: 100dvh;
    background-color: #232121;
    animation: ${open} 0.6s ease forwards;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }

  &.hide {
    animation: ${hide} 0.6s ease forwards;
  }
`;

export const OnlineTitle = styled.h5`
  padding-bottom: 10px;
  font-size: 17px;

  @media screen and (max-width: 520px) {
    font-size: 15px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
`;
