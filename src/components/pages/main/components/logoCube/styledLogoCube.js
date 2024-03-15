import styled, { css } from "styled-components";

export const rotateKeyframes = css`
  @keyframes rotate {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }

    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;

export const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;
  ${rotateKeyframes}

  @media screen and (max-width: 540px) {
    width: 100px;
    height: 100px;
  }
`;

const faceStyles = `
    position: absolute;
    width: 200px;
    height: 200px;
    cursor: grab;

    @media screen and (max-width: 540px) {
        width: 100px;
        height: 100px;
    }
`;

export const FaceFront = styled.div`
  ${faceStyles}
  position: absolute;
  width: 200px;
  height: 200px;
  transform: translateZ(100px);

  @media screen and (max-width: 540px) {
    transform: translateZ(50px);
  }
`;
export const FaceBack = styled.div`
  ${faceStyles}
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotateY(180deg) translateZ(100px);

  @media screen and (max-width: 540px) {
    transform: rotateY(180deg) translateZ(50px);
  }
`;

export const FaceTop = styled.div`
  ${faceStyles}
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotateX(90deg) translateZ(100px);

  @media screen and (max-width: 540px) {
    transform: rotateX(90deg) translateZ(50px);
  }
`;

export const FaceBottom = styled.div`
  ${faceStyles}
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotateX(-90deg) translateZ(100px);

  @media screen and (max-width: 540px) {
    transform: rotateX(-90deg) translateZ(50px);
  }
`;

export const FaceLeft = styled.div`
  ${faceStyles}
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotateY(-90deg) translateZ(100px);

  @media screen and (max-width: 540px) {
    transform: rotateY(-90deg) translateZ(50px);
  }
`;

export const FaceRight = styled.div`
  ${faceStyles}
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotateY(90deg) translateZ(100px);

  @media screen and (max-width: 540px) {
    transform: rotateY(90deg) translateZ(50px);
  }
`;
