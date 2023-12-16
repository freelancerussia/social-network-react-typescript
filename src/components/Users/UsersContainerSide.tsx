import { connect } from "react-redux";
import { AppDispatch, StateType } from "../../redux/redux-store";
import { UserType, followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";
import { useEffect } from "react";
import axios from "axios";


type UsersContainerSidePropsType = {
   users: Array<UserType>
   follow: (id: number) => void
   unfollow: (id: number) => void
   setUsers: (users: Array<UserType>) => void
}
// type GetResponseUsersDataType = {
//    items: Array<UserType>
// }


const UsersContainerSide = (props: UsersContainerSidePropsType) => {
   // useEffect(() => {
   //    return () => {
   //       async function getUsers() {
   //          await axios.get<GetResponseUsersDataType>("https://social-network.samuraijs.com/api/1.0/users")
   //             .then(response => {
   //                props.setUsers((response.data.items))
   //             })
   //       }
   //       getUsers();
   //    }
   // }, []);

   // return <Usesrs users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} />
}

export default UsersContainerSide;