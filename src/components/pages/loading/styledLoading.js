import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100%;
  background-color: #1d1b1b;
  z-index: 90;
`;

const moveKeyframes = keyframes`
    0% {
      left: 0;
      opacity: 0;
    }
  
    35% {
      left: 41%;
      opacity: 1;
    }
  
    65% {
      left: 59%;
      opacity: 1;
    }
  
    100% {
      left: 100%;
      opacity: 0;
    }
`;

export const LoadContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 36px;
  left: 50%;
  top: 40%;
  margin-left: -300px;
  overflow: visible;
  user-select: none;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const LoadItem = styled.div`
  position: absolute;
  font-weight: 800;
  width: 20px;
  height: 36px;
  opacity: 0;
  font-family: Helvetica, Arial, sans-serif;
  animation: ${moveKeyframes} 2s linear infinite;
  -o-animation: ${moveKeyframes} 2s linear infinite;
  -moz-animation: ${moveKeyframes} 2s linear infinite;
  -webkit-animation: ${moveKeyframes} 2s linear infinite;
  color: #00ff005c;

  &:nth-child(2) {
    animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
    -o-animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
  }

  &:nth-child(5) {
    animation-delay: 0.8s;
    -o-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    -webkit-animation-delay: 0.8s;
  }

  &:nth-child(6) {
    animation-delay: 1s;
    -o-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }

  &:nth-child(7) {
    animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
  }
`;
