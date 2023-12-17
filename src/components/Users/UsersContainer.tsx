import { connect } from "react-redux";
import { StateType, baseUrl } from "../../redux/redux-store";
import { UserType, follow, setCurrentPage, setTotalCount, setUsers, unfollow, setFetchingStatus } from "../../redux/usersReducer";
import Users from "./Users";
import { useEffect } from "react";
import axios from "axios";
import Preloader from "../UI/Preloader/Preloader";

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

}

type GetResponseUsersDataType = {
   items: Array<UserType>
   totalCount: number
}

const UsersContainer = (props: UsersContainerPropsType) => {

   useEffect(() => {
      // return () => {
      async function getUsers() {
         props.setFetchingStatus(true);
         await axios.get<GetResponseUsersDataType>(`${baseUrl}users?page=${props.currentPage}&count=${props.usersCount}`)
            .then(response => {
               // console.log(response.data.items);
               props.setTotalCount(response.data.totalCount);
               props.setUsers(response.data.items)
               props.setFetchingStatus(false);
            })
      }
      getUsers();
      // }
   }, [props.currentPage]);

   return (
      <div>
         {props.isFetching ? <Preloader /> : < Users currentPage={props.currentPage}
            users={props.users}
            usersCount={props.usersCount}
            totalCount={props.totalCount}
            follow={props.follow}
            unfollow={props.unfollow}
            setCurrentPage={props.setCurrentPage}
            setTotalCount={props.setTotalCount}
            setUsers={props.setUsers}

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
      isFetching: state.usersPage.isFetching
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
   setFetchingStatus
})(UsersContainer)