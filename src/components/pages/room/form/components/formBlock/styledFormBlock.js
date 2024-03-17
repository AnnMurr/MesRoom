import styled from "styled-components";

export const FormInner = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ffffff96;
  padding: 10px 10px 10px 40px;

  &:focus-visible {
    outline: 1px auto #00ff005c;
  }
`;
