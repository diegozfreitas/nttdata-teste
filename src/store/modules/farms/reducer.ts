import { Reducer } from "redux";
import { IFarmState } from "./types";
import produce from "immer";

const INITIAL_STATE: IFarmState = {
  items: [],
};

const farms: Reducer<IFarmState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FARM_TO_STATE": {
      const { farmData } = action.payload;

      return produce(state, (draft) => {
        draft.items.push(farmData);
      });
    }

    case "UPDATE_FARM_TO_STATE": {
      const { farmData } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === farmData.id
            ? {
                ...item,
                document: farmData.document,
                producerName: farmData.producerName,
                farmName: farmData.farmName,
                city: farmData.city,
                state: farmData.state,
                totalArea: farmData.totalArea,
                arableArea: farmData.arableArea,
                vegetationArea: farmData.vegetationArea,
                cultures: farmData.cultures,
              }
            : item
        ),
      };
    }

    case "REMOVE_FARM_TO_STATE": {
      const { farmId } = action.payload;

      const removeItem = state.items.filter((item) => item.id !== farmId);

      return {
        ...state,
        items: removeItem,
      };
    }
    default: {
      return state;
    }
  }
};

export default farms;
