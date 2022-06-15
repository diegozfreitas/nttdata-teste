import { IFarm } from "./types";

export const SaveFarm = (farmData: IFarm) => {
  return {
    type: "ADD_FARM_TO_STATE",
    payload: {
      farmData,
    },
  };
};

export const UpdateFarm = (farmData: IFarm) => {
  return {
    type: "UPDATE_FARM_TO_STATE",
    payload: {
      farmData,
    },
  };
};

export const RemoveFarm = (farmId: string) => {
  return {
    type: "REMOVE_FARM_TO_STATE",
    payload: {
      farmId,
    },
  };
};
