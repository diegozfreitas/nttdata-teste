import React from "react";
import { useSelector } from "react-redux";

import { IState } from "../../../../store";
import { IFarm } from "../../../../store/modules/farms/types";

import { Container, Card } from "./style";

import { dataTotalLandArea } from "./Utils/dataTotalLandArea";

export const Cards = () => {
  const farms = useSelector<IState, IFarm[]>((state) => state.farms.items);

  return (
    <Container>
      <Card>Total de fazendas {farms.length}</Card>
      <Card>Total de fazendas em hectares {dataTotalLandArea(farms)}</Card>
    </Container>
  );
};
