import React from "react";

import { Col, ContainerRowHeader } from "./styles";

import { ItemProps } from "./index";

interface HeaderProps {
  config: ItemProps[];
  height: number;
  isFunction: (data: any) => any;
}

export const Header = ({ config, height, isFunction }: HeaderProps) => {
  return (
    <ContainerRowHeader height={height}>
      {config.map((item, key) => (
        <Col
          key={key}
          style={{
            width: `${item.size ? `${item.size}%` : "100%"}`,
            justifyContent: `${item.center ? "center" : "flex-start"}`,
          }}
        >
          <p>
            {
              //@ts-ignore
              isFunction(item.label) ? item.label(item) : item.label
            }
          </p>
        </Col>
      ))}
    </ContainerRowHeader>
  );
};
