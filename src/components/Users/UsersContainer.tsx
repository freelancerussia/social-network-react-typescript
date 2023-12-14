import { connect } from "react-redux";
import { AppDispatch, StateType } from "../../redux/redux-store";
import { UserType, followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";




const mstp = (state: StateType) => {
   return {
      users: state.usersPage.users,
   }
}

type SetUsersActionType = {
   type: "SET-USERS"
   users: Array<UserType>
}
export const AC = (users: UserType[]): SetUsersActionType => {
   return {
      type: "SET-USERS",
      users: users
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
   }
}

export default connect(mstp, mdtp)(Users)