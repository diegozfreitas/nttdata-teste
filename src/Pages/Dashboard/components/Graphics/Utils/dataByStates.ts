import { IFarm } from "../../../../../store/modules/farms/types";

interface StateProps {
  state: string;
  count: number;
}

export const dataByStates = (farms: IFarm[]) => {
  let CountStates: StateProps[] = [];
  let refStates: string[] = [];
  let counter = 0;

  farms.map((item) => {
    if (!refStates.includes(item.state)) {
      refStates.push(item.state);
      CountStates.push({ state: item.state, count: counter++ });
      counter = 0;
    } 
  });

  farms.map((farm) => {
    CountStates.map((stateY) => {
      if (stateY.state === farm.state) {
        return stateY.count++;
      }
    });
  });

  return CountStates;
};
