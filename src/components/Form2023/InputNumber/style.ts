import styled, { css } from "styled-components";

const inputsCss = css`
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  ${inputsCss}
`;
