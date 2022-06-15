import React from "react";
import { useSelector } from "react-redux";
import { VictoryPie } from "victory";

import { IState } from "../../../../store";
import { IFarm } from "../../../../store/modules/farms/types";

import { ContentGraphics, Graphic, GraphicTitle } from "./style";

import { dataByStates } from "./Utils/dataByStates";
import { dataByCultures } from "./Utils/dataByCultures";
import { dataByLandUse } from "./Utils/dataByLandUse";
import { Link } from "react-router-dom";

export const Graphics = () => {
  const farms = useSelector<IState, IFarm[]>((state) => state.farms.items);

  return (
    <ContentGraphics>
      {farms.length > 0 ? (
        <>
          <Graphic>
            <GraphicTitle>Fazendas por Estados.</GraphicTitle>

            <VictoryPie
              data={dataByStates(farms)}
              x="state"
              y="count"
              labels={({ datum }) => `${datum.count}: ${datum.state}`}
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            />
          </Graphic>

          <Graphic>
            <GraphicTitle>Gráfico por Cultura.</GraphicTitle>

            <VictoryPie
              data={dataByCultures(farms)}
              x="name"
              y="count"
              labels={({ datum }) => datum?.count + ": " + datum?.name}
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            />
          </Graphic>

          <Graphic>
            <GraphicTitle>Gráfico por Uso de Solo.</GraphicTitle>

            <VictoryPie
              data={dataByLandUse(farms)}
              x="area"
              y="count"
              labels={({ datum }) => datum?.count + "Hec: " + datum?.area}
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            />
          </Graphic>
        </>
      ) : (
        <Link to="/edit">Cadastrar primeira fazenda</Link>
      )}
    </ContentGraphics>
  );
};
