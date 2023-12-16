import { connect } from "react-redux";
import { AppDispatch, StateType } from "../../redux/redux-store";
import { UserType, followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";


const mstp = (state: StateType) => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      usersCount: state.usersPage.usersCount
   }
}

const mdtp = (dispatch: AppDispatch) => {
   return {
      follow: (id: number) => {
         dispatch(followAC(id));
      },
      unfollow: (id: number) => {
         dispatch(unfollowAC(id));
      },
      setUsers: (users: Array<UserType>) => {
         dispatch(setUsersAC(users));
      },
      setTotalCount: (count: number) => {
         dispatch(setTotalCountAC(count));
      },
      setCurrentPage: (page: number) => {
         dispatch(setCurrentPageAC(page));
      }
   }
}

export default connect(mstp, mdtp)(Users)