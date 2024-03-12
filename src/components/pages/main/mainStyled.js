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
`;

export const Message = styled(motion.div)`
  color: white;
  font-size: 20px;
  position: absolute;
  text-wrap: nowrap;
`;

export const LaptopImage = styled(motion.div)`
  position: relative;
  
  max-width: 50%;
`;

export const MessageGreenWrap = styled.div`
  border-radius: 10px;
  background-color: #3e9413;
  padding: 0px 10px 5px 10px;
`;

export const MessageGrayWrap = styled.div`
  border-radius: 10px;
  background-color: #242121;
  padding: 0px 10px 5px 10px;
`;

export const MessageText = styled.span`
  font-size: 13px;
`;
