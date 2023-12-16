import React, { useEffect } from "react";
import { UserType } from "../../redux/usersReducer";
import User from "./User/User";
import axios from "axios";
import styles from "./Users.module.css"
import Paginations from "../UI/Myform/paginations/paginations";


type UsersPropsType = {
   users: Array<UserType>
   follow: (id: number) => void
   unfollow: (id: number) => void
   setUsers: (users: Array<UserType>) => void
   currentPage: number
   usersCount: number
   setTotalCount: (count: number) => void
   setCurrentPage: (page: number) => void
   totalCount: number
}


type GetResponseUsersDataType = {
   items: Array<UserType>
   totalCount: number
}

let baseUrl = "https://social-network.samuraijs.com/api/1.0/"
const Users = (props: UsersPropsType) => {
   useEffect(() => {
      // return () => {
      async function getUsers() {
         await axios.get<GetResponseUsersDataType>(`${baseUrl}users?page=${props.currentPage}&count=${props.usersCount}`)
            .then(response => {
               console.log(response.data.items);

               props.setTotalCount(response.data.totalCount);
               props.setUsers(response.data.items)
            })
      }
      getUsers();
      // }
   }, [props.currentPage]);

   return (
      <div>
         <Paginations currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
            totalCount={props.totalCount}
            elementsCount={props.usersCount} />
         {!props.users.length ? "Users not found" : props.users.map(u => {
            return (
               <User id={u.id}
                  follow={props.follow}
                  unfollow={props.unfollow}
                  key={u.id}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
                  photos={u.photos.small} />
            )
         })}
         <button >GET USERS</button>
      </div>
   )
}
export default Users;