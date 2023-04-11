import { listsStates } from "../../../../../Utils/states";
import { IFarm } from "../../../../../store/modules/farms/types";

interface StateProps {
  stateName: string;
  stateCod: string;
  count: number;
}

export const dataByStates = (farms: IFarm[]) => {
  let CountStates: StateProps[] = [];
  let refStates: string[] = [];
  let counter = 0;

  let states: any = localStorage.getItem("states");
  if (states === null) {
    (async () => {
      const data = await listsStates();
      states = JSON.parse(data);
    })();
  } else {
    states = JSON.parse(states);
  }

  function getName(term: string) {
    return String(states.find((obj: any) => obj.value === String(term))?.label);
  }

  farms.map((item) => {
    if (!refStates.includes(item.state)) {
      refStates.push(item.state);
      CountStates.push({
        stateName: getName(item.state),
        stateCod: item.state,
        count: counter++,
      });
      counter = 0;
    }
  });

  farms.map((farm) => {
    CountStates.map((stateY) => {
      if (stateY.stateCod === farm.state) {
        return stateY.count++;
      }
    });
  });

  return CountStates;
};
