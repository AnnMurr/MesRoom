import styled, { keyframes } from "styled-components";

const open = keyframes`
0% {
  left: -550px;
}

100% {
  left: 0;
  opacity: 1;
  visibility: visible;
}
`;

const hide = keyframes`
0% {
  left: 0;
  opacity: 1;
  visibility: visible;
}

100% {
  left: -550px;
  opacity: 0;
  visibility: hidden;
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
    visibility: hidden;
    opacity: 0;
    left: -550px;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }

  &.hide {
    animation: ${hide} 0.6s ease forwards;
  }

  &.open {
    animation: ${open} 0.6s ease forwards;
    visibility: visible;
    opacity: 1;
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
