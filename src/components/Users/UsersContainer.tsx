import { connect } from "react-redux";
import { StateType } from "../../redux/redux-store";
import {
   UserType,
   setCurrentPage,
   setTotalCount,
   setFetchingStatus,
   addFollowedUserNumber,
   removeFollowedUserNumber,
   getUsers,
   followT,
   unfollowT
} from "../../redux/usersReducer";
import Users from "./Users";
import { useEffect } from "react";
import Preloader from "../UI/Preloader/Preloader";

type UsersContainerPropsType = {
   users: Array<UserType>
   totalCount: number
   currentPage: number
   usersCount: number
   setCurrentPage: (page: number) => void
   setTotalCount: (count: number) => void
   setFetchingStatus: (status: boolean) => void
   isFetching: boolean
   followedUsers: Array<number>
   removeFollowedUserNumber: (id: number) => void
   addFollowedUserNumber: (id: number) => void
   getUsers: (currentPage: number, usersCount: number) => void
   followT: (id: number) => void
   unfollowT: (id: number) => void

}

const UsersContainer = (props: UsersContainerPropsType) => {

   useEffect(() => {
      props.getUsers(props.currentPage, props.usersCount);

   }, [props.currentPage]);


   return (
      <div>
         {props.isFetching ? <Preloader /> : < Users currentPage={props.currentPage}
            users={props.users}
            usersCount={props.usersCount}
            totalCount={props.totalCount}
            follow={props.followT}
            unfollow={props.unfollowT}
            setCurrentPage={props.setCurrentPage}
            setTotalCount={props.setTotalCount}
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
   setCurrentPage,
   setTotalCount,
   setFetchingStatus,
   addFollowedUserNumber,
   removeFollowedUserNumber,
   getUsers,
   followT,
   unfollowT
})(UsersContainer)