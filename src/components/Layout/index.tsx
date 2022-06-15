import React, { ReactNode, useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import { Container, Main, Header, Content, Title } from "./style";
import { Sidebar } from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  const sizeSidebar = 250;
  const sizeSidebarClose = 0;

  const [sideWidth, setSideWidth] = useState(sizeSidebar);

  return (
    <Container>
      <Sidebar sideWidth={sideWidth} />

      <Main sideWidth={sideWidth}>
        <Header>
          {sideWidth === sizeSidebarClose ? (
            <AiOutlineMenuUnfold
              size={30}
              onClick={() => setSideWidth(sizeSidebar)}
            />
          ) : (
            <AiOutlineMenuFold
              size={30}
              onClick={() => setSideWidth(sizeSidebarClose)}
            />
          )}
        </Header>

        <Content>
          <Title>{title}</Title>
          
          {children}
        </Content>
      </Main>
    </Container>
  );
};
