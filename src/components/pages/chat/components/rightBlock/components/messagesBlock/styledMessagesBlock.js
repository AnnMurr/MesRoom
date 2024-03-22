import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0 40px;
  overflow: scroll;
  scrollbar-width: none;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  @media screen and (max-width: 520px) {
    padding: 0 15px;
  }
`;

const MessageInnerCommon = css`
  padding: 10px;
  color: white;
  overflow-wrap: anywhere;

  @media screen and (max-width: 520px) {
    padding: 8px;
  }
`;

export const MessageInner = styled.div`
  ${MessageInnerCommon}
`;

export const MessageInnerOwn = styled.div`
  ${MessageInnerCommon}
  text-align: end;
  margin-left: auto;
`;

const MessageCommon = css`
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  white-space: pre-wrap;

  @media screen and (max-width: 520px) {
    padding: 8px;
  }

  span {
    color: #fff;

    @media screen and (max-width: 520px) {
      font-size: 14px;
    }
  }
`;

export const Message = styled.div`
  ${MessageCommon}
  background-color: #242121;
`;

export const MessageOwn = styled.div`
  ${MessageCommon}
  background-color: #3e9413;
  margin-left: auto;
`;

export const MessageText = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SubMessage = styled.div`
  font-size: 13px;
  opacity: 0.6;
  padding-top: 5px;

  @media screen and (max-width: 520px) {
    font-size: 11px;
  }
`;
