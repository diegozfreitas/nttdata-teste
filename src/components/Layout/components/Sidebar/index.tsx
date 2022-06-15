import React from "react";

import { Container, Logo, ContentItems, Item } from "./style";

interface SidebarProps {
  sideWidth: number;
}

const menuItens = [
  { label: "Início", path: "/" },
  { label: "Cadastro", path: "/edit" },
  { label: "Fazendas", path: "/farms" },
];

export const Sidebar = ({ sideWidth }: SidebarProps) => {
  return (
    <Container sideWidth={sideWidth}>
      <Logo>Farms</Logo>

      <ContentItems>
        {menuItens.map((item, key) => (
          <Item key={key} to={item.path}>
            {item.label}
          </Item>
        ))}
      </ContentItems>
    </Container>
  );
};
