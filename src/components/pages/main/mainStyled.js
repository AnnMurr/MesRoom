import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
`;

export const BtnInner = styled(Link)`
  display: contents;
`;

export const Title = styled(motion.div)`
  color: white;
  font-size: 20px;
  font-family: "Julius Sans One";

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }

  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
`;
