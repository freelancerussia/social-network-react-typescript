import React from "react";
import { UserType } from "../../redux/usersReducer";
import User from "./User/User";
import axios from "axios";

type UsersPropsType = {
   users: Array<UserType>
   follow: (id: number) => void
   unfollow: (id: number) => void
   setUsers: (users: Array<UserType>) => void
}

type GetResponseUsersDataType = {
   items: Array<UserType>
}

const Users = (props: UsersPropsType) => {
   async function getUsers() {
      await axios.get<GetResponseUsersDataType>("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            props.setUsers(response.data.items)
         })
   }

   return (
      <div>
         {!props.users.length ? "Users not found" : props.users.map(u => {
            return (
               <User id={u.id} follow={props.follow} unfollow={props.unfollow} key={u.id} followed={u.followed} name={u.name} status={u.status} photos={u.photos.small} />
            )
         })}
         <button onClick={getUsers}>GET USERS</button>
      </div>
   )
}
export default Users;