export type AddressType = {
   city: string
   country: string
}

export type UsersStateType = {
   users: Array<UserType>
}


type UnfollowActionType = {
   type: "UNFOLLOW"
   id: number
}
type FollowActionType = {
   type: "FOLLOW"
   id: number
}
type SetUsersActionType = {
   type: "SET-USERS"
   users: Array<UserType>
}

type PhotoUserType = {
   small: null
   large: null
}
export type UserType = {
   id: number
   followed: boolean
   name: string
   status: string | null
   photos: PhotoUserType
   uniqueUrlName: null | string
}

let initialState = {
   users: [
      {
         name: "Shubert", id: 111111, status: null, followed: false, uniqueUrlName: null, photos: {
            small: null,
            large: null
         },
      },
   ]
}

export type UsersReducerActionType = UnfollowActionType | FollowActionType | SetUsersActionType

const usersReduser = (state: UsersStateType = initialState, action: UsersReducerActionType) => {
   // let stateCopy = { ...state };
   switch (action.type) {
      case "FOLLOW":
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.id) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case "UNFOLLOW":
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.id) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case "SET-USERS":
         console.log("action", action);

         return {
            ...state,
            users: [...state.users, ...action.users]
         }

      default:
         return state;
   }
}

export const followAC = (id: number): FollowActionType => {
   return {
      type: "FOLLOW",
      id: id
   }
}
export const unfollowAC = (id: number): UnfollowActionType => {
   return {
      type: "UNFOLLOW",
      id: id
   }
}
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => {
   return {
      type: "SET-USERS",
      users: users
   }
}

export default usersReduser;