import styled from "styled-components";

export const CloseIcon = styled.span`
  color: red;
  font-size: 12px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentItems = styled.div`
  position: absolute;
  width: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  max-height: 50%;
  overflow: auto;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 10px 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Item = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: 4px;
  margin-bottom: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all .3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
