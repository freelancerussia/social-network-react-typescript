import { v1 } from "uuid"


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
}
export type DialogsPageType = {
   messages: Array<MessageType>
   dialogs: Array<DialogType>
}
export type SidebarType = {
   navMenu: Array<MenuType>
   friendsList: Array<FrindType>
}
type StoreType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarType
}


const store: StoreType = {
   profilePage: {
      posts: [
         { id: v1(), text: "qwer", likesCount: 30 },
         { id: v1(), text: "bgtrdc", likesCount: 3 },
         { id: v1(), text: "qazzzz", likesCount: 340 },
         { id: v1(), text: "xxxxx", likesCount: 20 },
      ]
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
}

export default store;