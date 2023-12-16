export type AddressType = {
   city: string
   country: string
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
type SetTotalCountActionType = {
   type: "SET-TOTAL-COUNT"
   count: number
}
type SetCurrentPageType = {
   type: "SET-CURRENT-PAGE"
   page: number
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
export type UsersStateType = {
   users: Array<UserType>
   totalCount: number
   usersCount: number
   currentPage: number
}


let initialState = {
   users: [
      {
         name: "Shubert", id: 111111, status: null, followed: false, uniqueUrlName: null, photos: {
            small: null,
            large: null
         },
      },
   ],
   totalCount: 1,
   usersCount: 5,
   currentPage: 1
}

export type UsersReducerActionType = UnfollowActionType | FollowActionType | SetUsersActionType
   | SetTotalCountActionType | SetCurrentPageType

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
         console.log("action", state.users);

         return {
            ...state,
            users: [...action.users]
         }
      case "SET-TOTAL-COUNT":
         return {
            ...state,
            totalCount: action.count
         }
      case "SET-CURRENT-PAGE":
         return {
            ...state,
            currentPage: action.page
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
export const setTotalCountAC = (count: number): SetTotalCountActionType => {
   return {
      type: "SET-TOTAL-COUNT",
      count
   }
}
export const setCurrentPageAC = (page: number): SetCurrentPageType => {
   return {
      type: "SET-CURRENT-PAGE",
      page
   }
}


export default usersReduser;