import { IFarm } from "../../../../../store/modules/farms/types";
import { plantationOptions } from "../../../../../Utils/plantationOptions";

interface CulturesProps {
  name: string;
  count: number;
}

export const dataByCultures = (farms: IFarm[]) => {
  let CountCultures: CulturesProps[] = [];
  let refCultures: string[] = [];
  let counter = 0;

  farms.map((item) => {
    item.cultures.map((culture: any) => {
      if (!refCultures.includes(culture)) {
        refCultures.push(culture);
        CountCultures.push({
          name: plantationOptions.find((item) => item.value === culture)!?.label,
          count: counter++,
        });
      }
    });
  });

  CountCultures.map((cultureI) => {
    CountCultures.map((cultureY) => {
      if (cultureY.name === cultureI.name) {
        return cultureY.count++;
      }
    });
  });

  return CountCultures;
};
