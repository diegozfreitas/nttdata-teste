import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { IFarmState } from "./modules/farms/types";

export interface IState {
  farms: IFarmState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
