import styled from "styled-components";
import { Link } from "react-router-dom";

interface ContainerProps {
  sideWidth: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ sideWidth }) => sideWidth}px;
  min-height: 100vh;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 25px 0 0 25px;
  padding: ${({ sideWidth }) => (sideWidth === 0 ? 0 : 16)}px;
  box-shadow: 1px 2px 4px #00000029;
  overflow: auto;
`;

export const Logo = styled.h3`
  font-size: 40px;
  color: ${({theme})=> theme.colors.tertiary};
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ContentItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Item = styled(Link)`
  width: 100%;
  padding: 16px;
  color: ${({theme})=> theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid  ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text_light};
  }
`;
