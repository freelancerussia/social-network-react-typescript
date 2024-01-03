import { v1 } from "uuid";

export type DialogsPageType = {
   messages: Array<MessageType>
   dialogs: Array<DialogType>
   newMessageText: string
}
type MessageType = {
   id: string
   message: string
}
type DialogType = {
   id: string
   name: string
}
export type DialogsReducerActionType = updateNewMessageTextAction | AddNewMessageActionType

export type updateNewMessageTextAction = {
   type: "UPDATE-NEW-MESSAGE-TEXT"
   newText: string
}
export type AddNewMessageActionType = {
   type: "ADD-NEW-MESSAGE"
}

let initialState: DialogsPageType = {
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
   newMessageText: ""
}



const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType): DialogsPageType => {
   let copyState = { ...state };
   switch (action.type) {
      case "ADD-NEW-MESSAGE": {
         let newMessage = {
            id: v1(), message: state.newMessageText,
         }
         let messages = [...state.messages];
         messages.push(newMessage)
         copyState.messages = messages;
         copyState.newMessageText = "";

         return copyState;
      }
      case "UPDATE-NEW-MESSAGE-TEXT":
         copyState.newMessageText = action.newText;
         return copyState;

      default:
         return copyState;
   }
}

export const updateNewMessageTextAC = (text: string): updateNewMessageTextAction => {
   return {
      type: "UPDATE-NEW-MESSAGE-TEXT",
      newText: text
   }
}
export const addNewMessagetAC = (): AddNewMessageActionType => {
   return {
      type: "ADD-NEW-MESSAGE",

   }
}


export default dialogsReducer;