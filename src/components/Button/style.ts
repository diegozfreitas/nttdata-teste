import styled, { css } from "styled-components";

interface ButtonProps {
  inline?: boolean;
  color?: string;
  labelColor?: string;
  border?: string;
  disabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  padding: 12px 32px;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.primary};

  color: ${({ theme, labelColor }) =>
    labelColor ? labelColor : theme.colors.text_light};

  font-size: 16px;

  cursor: pointer;
  border-radius: 16px;
  text-transform: capitalize;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
    `}

  ${({ theme, border, color }) =>
    border
      ? css`
          border: 1px solid ${border ? border : theme.colors.primary};
        `
      : css`
          border: 1px solid ${color ? color : theme.colors.primary};
        `}

        ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.tertiary};
      border-color: ${theme.colors.tertiary};
      cursor: not-allowed;
    `}
`;
