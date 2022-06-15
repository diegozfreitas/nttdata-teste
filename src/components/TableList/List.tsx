import React from "react";

import { Container, ContainerRow, Col, LabelCol } from "./styles";

import { ItemProps } from "./index";

interface ListProps {
  config: ItemProps[];
  data: any;
  height: number;
  isFunction: (data: any) => any;
}

export const List = ({ config, data, height, isFunction }: ListProps) => {
  return (
    <Container>
      {data.map((item: ItemProps, key: string) => (
        <ContainerRow height={height} key={key}>
          {[...new Array(config.length)].map((i, k) => (
            <Col
              key={k}
              style={{
                width: `${config[k].size ? `${config[k].size}%` : "100%"}`,
                justifyContent: `${config[k].center ? "center" : "flex-start"}`,
              }}
            >
              <>
                {isFunction(config[k].path) ? (
                  <>
                    {
                      //@ts-ignore
                      <LabelCol>{config[k].label}: </LabelCol>
                    }
                    {
                      //@ts-ignore
                      config[k].path(item)
                    }
                  </>
                ) : (
                  <>
                    {
                      //@ts-ignore
                      <LabelCol>{config[k].label}:</LabelCol>
                    }
                    {
                      //@ts-ignore
                      item[config[k].path]
                    }
                  </>
                )}
              </>
            </Col>
          ))}
        </ContainerRow>
      ))}
    </Container>
  );
};
