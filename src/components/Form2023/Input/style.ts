import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

const inputsCss = css`
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InputM = styled(InputMask)`
  ${inputsCss}
`;

export const Input = styled.input`
  ${inputsCss}
`;
