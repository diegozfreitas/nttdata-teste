import { IFarm } from "../../../../../store/modules/farms/types";

interface LandUseProps {
  area: string;
  count: number;
}

export const dataByLandUse = (farms: IFarm[]) => {
  let sumVegetationArea = 0;
  let sumArableArea = 0;

  let area: LandUseProps[] = [];

  farms.map((farm) => {
    sumVegetationArea += farm.vegetationArea;
    sumArableArea += farm.arableArea;
  });

  area.push({ area: "Agricultável", count: sumArableArea });
  area.push({ area: "Vegetação", count: sumVegetationArea });

  return area
};
