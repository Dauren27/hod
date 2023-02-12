import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducer=combineReducers({
    sidebarReducer
})
export type RootState=ReturnType<typeof rootReducer>
