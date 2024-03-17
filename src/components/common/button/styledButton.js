import styled from "styled-components";

export const Btn = styled.button`
  padding: ${({ size }) => size === "big" ? "15px" : size === "small" ? "10px" : "13px"};
  border-radius: 2px;
  background-color: #55ea47d4;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s ease-in-out;
  width: 100%;
  max-width: ${({ size }) => (size === "big" ? "330px" : "100%")};

  &:hover {
    background-color: #7fffd4;
    background-image: linear-gradient(45deg, #7fffd4, #adff2f);
    background-size: 200% 200%;
    animation: gradientShift 1.5s ease infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
