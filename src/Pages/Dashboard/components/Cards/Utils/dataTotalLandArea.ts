import { IFarm } from "../../../../../store/modules/farms/types";

export const dataTotalLandArea = (farms: IFarm[]) => {
  let sumTotalArea = 0;

  let area: number = 0;

  farms.map((farm) => {
    sumTotalArea += farm.totalArea;
  });

  area = sumTotalArea;

  return area;
};
