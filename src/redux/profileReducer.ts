import { v1 } from "uuid"
import { ProfilePageType } from "./state"

export type ProfileReducerActionType = addPostActionType | updateNewPostTextActionType

type addPostActionType = {
   type: 'ADD-POST'
   // newPostText: string
}
type updateNewPostTextActionType = {
   type: 'UPDATE-NEW-POST-TEXT'
   newPostText: string
}


const profileReducer = (state: ProfilePageType, action: ProfileReducerActionType): ProfilePageType => {
   let copyState = { ...state };
   switch (action.type) {
      case "ADD-POST":
         state.posts.unshift({ id: v1(), text: state.newPostText, likesCount: 0 })
         copyState.newPostText = "";

         return copyState;
      case "UPDATE-NEW-POST-TEXT":
         copyState.newPostText = action.newPostText;

         return copyState;
   }
}

export const addPostAC = (): addPostActionType => {
   return {
      type: 'ADD-POST',
   }
}

export const updateNewPostTextAC = (text: string): updateNewPostTextActionType => {
   return {
      type: 'UPDATE-NEW-POST-TEXT',
      newPostText: text
   }
}

export default profileReducer;