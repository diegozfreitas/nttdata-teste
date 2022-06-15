import styled, { css } from "styled-components";

interface CheckProps {
  active: boolean;
}

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const Check = styled.div<CheckProps>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: inline-block;
  margin-right: 4px;

  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.text};

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.colors.primary};
    `};
`;


