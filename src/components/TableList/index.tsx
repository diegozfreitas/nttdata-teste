import React from "react";
import styled from "styled-components";

import { List } from "./List";
import { Header } from "./Header";

const Container = styled.div``;

export interface ItemProps {
  label: string | ((data?: any) => any);
  path: string | ((data?: any) => any);
  size: number;
  center?: "center" | "flex-start";
}

export interface TableListProps {
  config: ItemProps[];
  data: any[];
}

export const TableList = ({ data, config }: TableListProps) => {
  const minHeight = 40;

  const isFunction = (item: () => any | string) => {
    return typeof item === "function";
  };

  return (
    <Container>
      <Header
        isFunction={isFunction}
        config={config ? config : []}
        height={minHeight}
      />
      <List
        isFunction={isFunction}
        data={data ? data : []}
        config={config ? config : []}
        height={minHeight}
      />
    </Container>
  );
};
