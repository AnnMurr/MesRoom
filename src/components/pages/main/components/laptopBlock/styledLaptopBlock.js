import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const LaptopImage = styled(motion.div)`
  position: fixed;
  bottom: 20%;
  max-width: 50%;
`;

export const Message = styled(motion.div)`
  color: white;
  position: absolute;
  text-wrap: nowrap;
  z-index: 30;
`;

const MessageWrap = css`
  border-radius: 10px;
  padding: 10px;
  line-height: 10px;

  @media screen and (max-width: 940px) {
    padding: 7px;
  }

  @media screen and (max-width: 650px) {
    padding: 5px 5px 8px 5px;
    line-height: 6px;
  }

  @media screen and (max-width: 500px) {
    padding: 0px 4px 4px 5px;
  }
`;

export const MessageGreenWrap = styled.div`
  background-color: #3e9413;
  ${MessageWrap}
`;

export const MessageGrayWrap = styled.div`
  background-color: #242121;
  ${MessageWrap}
`;

export const MessageText = styled.span`
  font-size: 13px;

  @media screen and (max-width: 940px) {
    font-size: 11px;
  }

  @media screen and (max-width: 650px) {
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`;
