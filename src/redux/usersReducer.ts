import { usersAPI } from "../api"
import { AppDispatch } from "./redux-store"

export type AddressType = {
   city: string
   country: string
}
type SetFetchingStatus = {
   type: "SET-FETCHING-STATUS"
   status: boolean
}

type FollowedUsersAddType = {
   type: "ADD-USER-FOLLOW"
   id: number
}
type FollowedUsersRemoveType = {
   type: "REMOVE-USER-FOLLOW"
   id: number
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
   small: null | string
   large: null | string
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
   isFetching: boolean
   followedUsers: Array<number>
}


let initialState: UsersStateType = {
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
   currentPage: 1,
   isFetching: false,
   followedUsers: [],
}

export type UsersReducerActionType = UnfollowActionType | FollowActionType | SetUsersActionType
   | SetTotalCountActionType | SetCurrentPageType | SetFetchingStatus | FollowedUsersAddType
   | FollowedUsersRemoveType

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
      case "SET-FETCHING-STATUS":
         return {
            ...state,
            isFetching: action.status
         }
      case "ADD-USER-FOLLOW":
         return {
            ...state,
            followedUsers: [...state.followedUsers, action.id]
         }
      case "REMOVE-USER-FOLLOW":
         return {
            ...state,
            followedUsers: state.followedUsers.filter(id => id !== action.id)
         }

      default:
         return state;
   }
}

export const follow = (id: number): FollowActionType => {
   return {
      type: "FOLLOW",
      id: id
   }
}
export const unfollow = (id: number): UnfollowActionType => {
   return {
      type: "UNFOLLOW",
      id: id
   }
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
   return {
      type: "SET-USERS",
      users: users
   }
}
export const setTotalCount = (count: number): SetTotalCountActionType => {
   return {
      type: "SET-TOTAL-COUNT",
      count
   }
}
export const setCurrentPage = (page: number): SetCurrentPageType => {
   return {
      type: "SET-CURRENT-PAGE",
      page
   }
}
export const setFetchingStatus = (status: boolean): SetFetchingStatus => {
   return {
      type: "SET-FETCHING-STATUS",
      status
   }
}

export const addFollowedUserNumber = (id: number): FollowedUsersAddType => {
   return {
      type: "ADD-USER-FOLLOW",
      id
   }
}

export const removeFollowedUserNumber = (id: number): FollowedUsersRemoveType => {
   return {
      type: "REMOVE-USER-FOLLOW",
      id
   }
}

export const getUsers = (currentPage: number, usersCount: number) => (dispatch: AppDispatch) => {
   dispatch(setFetchingStatus(true));
   usersAPI.getUsers(currentPage, usersCount)
      .then(response => {
         dispatch(setTotalCount(response.data.totalCount));
         dispatch(setUsers(response.data.items));
         dispatch(setFetchingStatus(false));
      })
}

export const followT = (id: number) => (dispatch: AppDispatch) => {
   dispatch(addFollowedUserNumber(id));
   usersAPI.follow(id)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(follow(id))
            dispatch(removeFollowedUserNumber(id));
         }
      })
}
export const unfollowT = (id: number) => (dispatch: AppDispatch) => {
   dispatch(addFollowedUserNumber(id));
   usersAPI.unfollow(id)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(unfollow(id))
            dispatch(removeFollowedUserNumber(id));
         }
      })
}

export default usersReduser;