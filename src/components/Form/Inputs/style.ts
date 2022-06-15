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

export const Container = styled.div`
  margin-bottom: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const InputM = styled(InputMask)`
  ${inputsCss}
`;

export const Input = styled.input`
  ${inputsCss}
`;

export const LabelError = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.alert};
  margin-top: -6px;
  margin-bottom: 8px;
`;
