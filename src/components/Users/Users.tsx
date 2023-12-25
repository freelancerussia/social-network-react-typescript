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
   followedUsers: Array<number>

}

const Users = (props: UsersPropsType) => {
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
                  photos={u.photos.small}
                  followedUsers={props.followedUsers}
               />
            )
         })}
         <button >GET USERS</button>
      </div>
   )
}
export default Users;