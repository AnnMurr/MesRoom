import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnInner = styled(Link)`
  display: contents;
`;

export const Title = styled(motion.div)`
  color: white;
  font-size: 20px;

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }

  @media screen and (max-width: 520px) {
    font-size: 10px;
  }

  @media screen and (max-width: 400px) {
    font-size: 8px;
  }
`;

export const Message = styled(motion.div)`
  color: white;
  position: absolute;
  text-wrap: nowrap;
`;

export const MessageGreenWrap = styled.div`
  border-radius: 10px;
  background-color: #3e9413;
  padding: 0px 10px 3px 10px;
`;

export const MessageGrayWrap = styled.div`
  border-radius: 10px;
  background-color: #242121;
  padding: 0px 10px 3px 10px;
`;

export const LaptopImage = styled(motion.div)`
  position: fixed;
  bottom: 20%;
  max-width: 50%;
`;

export const MessageText = styled.span`
  font-size: 13px;

  @media screen and (max-width: 940px) {
    font-size: 11px;
  }

  @media screen and (max-width: 650px) {
    font-size: 10px;
  }
`;
