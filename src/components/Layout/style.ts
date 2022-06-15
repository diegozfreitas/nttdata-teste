import styled from "styled-components";

interface SideWidthProps {
  sideWidth: number;
}

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background_extra_light};
`;

export const Title = styled.h1`
  color: ${({theme})=> theme.colors.tertiary};
  border-bottom: 1px solid ${({theme})=> theme.colors.tertiary};
  margin-bottom: 16px;
  font-size: 28px;
`;

export const Main = styled.div<SideWidthProps>`
  width: calc(100% - ${({ sideWidth }) => sideWidth + "px"});
  min-height: 100vh;
  transition: 0.3s;
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_light};
  box-shadow: 1px 2px 4px #00000029;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 16px;
`;
