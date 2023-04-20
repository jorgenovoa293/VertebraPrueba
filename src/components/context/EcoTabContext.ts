import { createContext, Dispatch } from "react";
import { EcoTabReducerActionType } from "./EcoTabReducer";

const initialState: Array<any> = [];

type Action = { type: EcoTabReducerActionType.REMOVE_TABS };

export const EcoTabContext = createContext<{
  tabs: any;
  dispatch: Dispatch<Action>;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}>({
  tabs: initialState,
  dispatch: () => null,
  setActiveTab: () => null,
});
