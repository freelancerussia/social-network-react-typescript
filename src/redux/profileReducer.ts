import { v1 } from "uuid"
import { ProfilePageType } from "./state"

export type ProfileReducerActionType = addPostActionType

type addPostActionType = {
   type: 'ADD-POST'
   newPostText: string
}

const profileReducer = (state: ProfilePageType, action: ProfileReducerActionType): ProfilePageType => {
   switch (action.type) {
      case "ADD-POST":
         state.posts.unshift({ id: v1(), text: action.newPostText, likesCount: 0 })
         return { ...state, };
   }
}

export const addPostAC = (text: string): addPostActionType => {
   return {
      type: 'ADD-POST',
      newPostText: text
   }
}

export default profileReducer;