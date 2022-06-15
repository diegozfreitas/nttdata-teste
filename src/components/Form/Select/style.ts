import styled, { css } from "styled-components";
import { FaCaretDown } from "react-icons/fa";

import { TypesThisStyleComp } from "./types";

export const Container = styled.div<TypesThisStyleComp>`
  position: relative;
  margin-bottom: 8px;
`;

export const Label = styled.div<TypesThisStyleComp>``;

export const LabelError = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.alert};
  margin-top: -6px;
  margin-bottom: 8px;
`;

export const Content = styled.div<TypesThisStyleComp>`
  border: 1px solid ${({ theme }) => theme.colors.text};

  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid transparent;
  margin: 0px;

  &:focus {
    outline: none;
  }
`;

export const Selected = styled.div`
  width: 100%;
`;

export const ContentIcon = styled.div<TypesThisStyleComp>`
  width: 36px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 10px 10px 0px;
  border-left: 1px solid ${({ theme }) => theme.colors.text};
  padding: 8px;
`;

export const Icon = styled(FaCaretDown)<TypesThisStyleComp>`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentOption = styled.div`
  background: ${({ theme }) => theme.colors.background_extra_light};
  border-radius: 10px;
  margin: 8px auto;
  max-height: 160px;
  overflow: auto;
  z-index: 100;

  position: absolute;
  width: 100%;
  top: 60px;

  -webkit-box-shadow: 0px 2px 10px 0px rgba(222, 222, 222, 0.4);
  -moz-box-shadow: 0px 2px 10px 0px rgba(222, 222, 222, 0.4);
  box-shadow: 0px 2px 10px 0px rgba(222, 222, 222, 0.4);

  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }
  &::-webkit-scrollbar-button {
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-corner {
  }
  &::-webkit-resizer {
  }
`;

export const Option = styled.div<TypesThisStyleComp>`
  padding: 8px;
  border-bottom: 1px solid
    ${({ theme, color }) => (color ? color : theme.colors.text)};
  cursor: pointer;

  ${({ disabled }) => (disabled ? `cursor: not-allowed;` : ``)};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;
