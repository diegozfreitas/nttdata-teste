import styled, { css } from "styled-components";

import { thisCompStyle } from "./types";

export const Container = styled.div<thisCompStyle>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  border-radius: 50px;
  padding: 5px;
  margin-left: 2px;
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  &:hover {
    ${({ disabled }) => (disabled ? `` : `opacity: 0.75;`)};
  }

  ${({ disabled, theme }) =>
    disabled
      ? css`
          cursor: not-allowed;
          color: ${theme.colors.text_light};
          background-color: ${theme.colors.background_extra_light};
        `
      : ``};
`;
