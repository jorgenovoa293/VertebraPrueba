export enum EcoTabReducerActionType {
  REMOVE_TABS = "REMOVE_TABS",
  ADD_TABS = "ADD_TABS",
}

export const EcoTabReducer = (state: any, action: any): Array<any> => {
  switch (action.type) {
    case EcoTabReducerActionType.REMOVE_TABS:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case EcoTabReducerActionType.ADD_TABS:
      return [...state, action.payload];
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
