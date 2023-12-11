import { v1 } from "uuid"
import profileReducer, { ProfileReducerActionType } from "./profileReducer"


export type MessageType = {
   id: string
   message: string
}
export type DialogType = {
   id: string
   name: string
}
export type PostType = {
   id: string
   text: string
   likesCount: number
}
export type MenuType = {
   id: string
   path: string
   title: string
}
export type FrindType = {
   id: string
   name: string
}


export type ProfilePageType = {
   posts: Array<PostType>
   newPostText: string
}
export type DialogsPageType = {
   messages: Array<MessageType>
   dialogs: Array<DialogType>
}
export type SidebarType = {
   navMenu: Array<MenuType>
   friendsList: Array<FrindType>
}
export type StateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarType
}
export type DispatchActionType = ProfileReducerActionType
type StoreType = {
   _state: StateType
   _rerender: (state: StateType) => void
   getState: () => StateType
   subscriber: (observer: (state: StateType) => void) => void
   dispatch: (action: DispatchActionType) => void
}


const store: StoreType = {
   _state: {
      profilePage: {
         posts: [
            { id: v1(), text: "qwer", likesCount: 30 },
            { id: v1(), text: "bgtrdc", likesCount: 3 },
            { id: v1(), text: "qazzzz", likesCount: 340 },
            { id: v1(), text: "xxxxx", likesCount: 20 },
         ],
         newPostText: ""
      },
      dialogsPage: {
         messages: [
            { id: v1(), message: "hi" },
            { id: v1(), message: "yo" },
            { id: v1(), message: "qqqq" },
         ],
         dialogs: [
            { id: v1(), name: "Valera" },
            { id: v1(), name: "Sanya" },
            { id: v1(), name: "Sasha" },
         ],
      },
      sidebar: {
         navMenu: [
            { id: v1(), path: "profile", title: "Profile", },
            { id: v1(), path: "dialogs", title: "Dialogs", },
            { id: v1(), path: "music", title: "Music", },
            { id: v1(), path: "settings", title: "Settings", },
         ],
         friendsList: [
            { id: v1(), name: "Ivan" },
            { id: v1(), name: "kate" },
            { id: v1(), name: "Vano" },
         ]
      },
   },
   _rerender(state) {
      console.log('rerender');
   },
   getState() {
      return this._state;
   },
   subscriber(observer) {
      this._rerender = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._rerender(this._state);
   },

}

export default store;