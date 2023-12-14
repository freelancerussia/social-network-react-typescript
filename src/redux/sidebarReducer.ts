import { v1 } from "uuid";
import { SidebarType } from "./state"

export type SidebarReducerActionType = ""

let initialState: SidebarType = {
   navMenu: [
      { id: v1(), path: "profile", title: "Profile", },
      { id: v1(), path: "users", title: "Users", },
      { id: v1(), path: "dialogs", title: "Dialogs", },
      { id: v1(), path: "music", title: "Music", },
      { id: v1(), path: "settings", title: "Settings", },
   ],
   friendsList: [
      { id: v1(), name: "Ivan" },
      { id: v1(), name: "kate" },
      { id: v1(), name: "Vano" },
   ]
}

const sidebarReducer = (state: SidebarType = initialState, action: SidebarReducerActionType): SidebarType => {
   let copyState = { ...state };
   // switch (action.type) {

   return copyState;
   // }
}



export default sidebarReducer;