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

let initialState: ProfilePageType = {
   posts: [
      { id: v1(), text: "qwer", likesCount: 30 },
      { id: v1(), text: "bgtrdc", likesCount: 3 },
      { id: v1(), text: "qazzzz", likesCount: 340 },
      { id: v1(), text: "xxxxx", likesCount: 20 },
   ],
   newPostText: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {
   let copyState = { ...state };
   switch (action.type) {
      case "ADD-POST": {
         let newPost = {
            id: v1(), text: state.newPostText, likesCount: 0
         }
         let posts = [...state.posts];
         posts.unshift(newPost)
         copyState.posts = posts;
         copyState.newPostText = "";

         return copyState;
      }
      case "UPDATE-NEW-POST-TEXT":
         copyState.newPostText = action.newPostText;

         return copyState;
      default:
         return state
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