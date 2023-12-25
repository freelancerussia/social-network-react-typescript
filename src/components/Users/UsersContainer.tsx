import { connect } from "react-redux";
import { StateType, baseUrl } from "../../redux/redux-store";
import {
   UserType,
   follow,
   setCurrentPage,
   setTotalCount,
   setUsers,
   unfollow,
   setFetchingStatus,
   addFollowedUserNumber,
   removeFollowedUserNumber
} from "../../redux/usersReducer";
import Users from "./Users";
import { useEffect } from "react";
import axios from "axios";
import Preloader from "../UI/Preloader/Preloader";
import { usersAPI } from "../../api";

type UsersContainerPropsType = {
   users: Array<UserType>
   totalCount: number
   currentPage: number
   usersCount: number
   follow: (id: number) => void
   unfollow: (id: number) => void
   setCurrentPage: (page: number) => void
   setTotalCount: (count: number) => void
   setUsers: (users: Array<UserType>) => void
   setFetchingStatus: (status: boolean) => void
   isFetching: boolean
   followedUsers: Array<number>
   removeFollowedUserNumber: (id: number) => void
   addFollowedUserNumber: (id: number) => void

}

// type GetResponseUsersDataType = {
//    items: Array<UserType>
//    totalCount: number
// }

const UsersContainer = (props: UsersContainerPropsType) => {

   useEffect(() => {
      props.setFetchingStatus(true);
      usersAPI.getUsers(props.currentPage, props.usersCount)
         .then(response => {
            props.setTotalCount(response.data.totalCount);
            props.setUsers(response.data.items)
            props.setFetchingStatus(false);
         })

   }, [props.currentPage]);
   const follow = (id: number) => {
      props.addFollowedUserNumber(id)
      usersAPI.follow(id)
         .then(response => {
            if (response.data.resultCode === 0) {
               props.follow(id)
            }
         })
      props.removeFollowedUserNumber(id);

   }
   const unfollow = (id: number) => {

      props.addFollowedUserNumber(id)

      usersAPI.unfollow(id)
         .then(response => {
            if (response.data.resultCode === 0) {
               props.unfollow(id);
               props.removeFollowedUserNumber(id);
            }
         })

   }
   return (
      <div>
         {props.isFetching ? <Preloader /> : < Users currentPage={props.currentPage}
            users={props.users}
            usersCount={props.usersCount}
            totalCount={props.totalCount}
            follow={follow}
            unfollow={unfollow}
            setCurrentPage={props.setCurrentPage}
            setTotalCount={props.setTotalCount}
            setUsers={props.setUsers}
            followedUsers={props.followedUsers}

         />}
      </div>

   )
}

const mstp = (state: StateType) => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      usersCount: state.usersPage.usersCount,
      isFetching: state.usersPage.isFetching,
      followedUsers: state.usersPage.followedUsers
   }
}

// const mdtp = (dispatch: AppDispatch) => {
//    return {
//       follow: (id: number) => {
//          dispatch(followAC(id));
//       },
//       unfollow: (id: number) => {
//          dispatch(unfollowAC(id));
//       },
//       setUsers: (users: Array<UserType>) => {
//          dispatch(setUsersAC(users));
//       },
//       setTotalCount: (count: number) => {
//          dispatch(setTotalCountAC(count));
//       },
//       setCurrentPage: (page: number) => {
//          dispatch(setCurrentPageAC(page));
//       }
//    }
// }
//58. mdtp replaced { AC }
export default connect(mstp, {
   follow,
   setCurrentPage,
   setTotalCount,
   setUsers,
   unfollow,
   setFetchingStatus,
   addFollowedUserNumber,
   removeFollowedUserNumber
})(UsersContainer)