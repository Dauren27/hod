import { useDispatch } from "../../../node_modules/react-redux/es/exports"
import { SidebarActionTypes } from "../reducers/sidebarReducer"

export const setSidebarAction=(sidebarState:boolean)=>{
    return {type: SidebarActionTypes.SET_SIDEBAR,payload: sidebarState}
}