const initialState: SidebarState = {
  open: false,
};
interface SidebarState {
  open: boolean;
}
export enum SidebarActionTypes {
  SET_SIDEBAR = "SET_SIDEBAR",
}
interface SetSidebarAction {
  type: SidebarActionTypes.SET_SIDEBAR;
  payload: boolean;
}
export const sidebarReducer = (
  state = initialState,
  action: SetSidebarAction
): SidebarState => {
  switch (action.type) {
    case SidebarActionTypes.SET_SIDEBAR:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
