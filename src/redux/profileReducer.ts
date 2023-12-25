import { v1 } from "uuid"
import { AppDispatch } from "./redux-store"
import { usersAPI } from "../api"


type SetUserProfileAction = {
   type: "SET-USER-PROFILE"
   userProfile: UserProfileType
}

type addPostActionType = {
   type: 'ADD-POST'
   // newPostText: string
}
type updateNewPostTextActionType = {
   type: 'UPDATE-NEW-POST-TEXT'
   newPostText: string
}
export type PostType = {
   id: string
   text: string
   likesCount: number
}



export type ContactsUserType = {
   [key: string]: string | null
   // facebook: string | null
   // website: string | null
   // vk: string | null
   // instagram: string | null
   // twitter: string | null
   // github: string | null
   // youtube: string | null
   // mainLink: string | null
}
type PhotoUserType = {
   small: null | string
   large: null | string
}
export type UserProfileType = {
   userId: number
   aboutMe: string | null
   fullName: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   contacts: ContactsUserType
   photos: PhotoUserType

}
export type ProfilePageType = {
   posts: Array<PostType>
   newPostText: string
   userProfile: UserProfileType
}

let initialState: ProfilePageType = {
   posts: [
      { id: v1(), text: "qwer", likesCount: 30 },
   ],
   userProfile: {
      aboutMe: "",
      contacts: {
         facebook: '',
         website: null,
         vk: '',
         twitter: '',
         instagram: 'instagra.com/sds',
         github: 'https://github.com',
         youtube: 'https://youtube.com',
         mainLink: null,
      },
      fullName: "",
      lookingForAJob: true,
      lookingForAJobDescription: "",
      photos: {
         small: '',
         large: ''
      },
      userId: 2,
   },
   newPostText: "",
}

export type ProfileReducerActionType = addPostActionType | updateNewPostTextActionType | SetUserProfileAction


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
      case "SET-USER-PROFILE":
         return {
            ...state,
            userProfile: action.userProfile
         }
      default:
         return state
   }

}

export const addPost = (): addPostActionType => {
   return {
      type: 'ADD-POST',
   }
}

export const updateNewPostText = (text: string): updateNewPostTextActionType => {
   return {
      type: 'UPDATE-NEW-POST-TEXT',
      newPostText: text
   }
}
export const setUserProfile = (userProfile: UserProfileType): SetUserProfileAction => {
   return {
      type: 'SET-USER-PROFILE',
      userProfile
   }
}

export const getProfile = (id: number) => (dispatch: AppDispatch) => {
   usersAPI.getProfile(id)
      .then(response => {
         // console.log(response);
         dispatch(setUserProfile(response.data));
      })

}

export default profileReducer;