import { v1 } from "uuid";
import { MusicPageType } from "./state"


export type MusicReducerActionType = {}

export type updateNewMessageTextAction = {
   type: "UPDATE-NEW-MESSAGE-TEXT"
   newText: string
}
export type AddNewMessageActionType = {
   type: "ADD-NEW-MESSAGE"
}

let initialState: MusicPageType = {

}



const musicReducer = (state: MusicPageType = initialState, action: MusicReducerActionType): MusicPageType => {
   let copyState = { ...state };

   return copyState;

}


export default musicReducer;