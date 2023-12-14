import React from "react";
import styles from './User.module.css'


type UserPropsType = {
   followed: boolean
   name: string
   status: string | null
   photos: string | null
   follow: (id: number) => void
   unfollow: (id: number) => void
   id: number
}

const User = (props: UserPropsType) => {

   const onFollow = () => {
      props.follow(props.id)
   }
   const onUnFollow = () => {
      props.unfollow(props.id)
   }
   return (
      <div className={styles.userContainer}>
         <div>
            <div className={styles.imgContainer}><img src="" alt="" /></div>
            <div> {props.followed ? <button onClick={onUnFollow}>unfollow</button> : <button onClick={onFollow}>follow</button>} </div>
         </div>
         <div>
            <div>
               {props.name}
            </div>
            <div>
               {props.status}
            </div>
         </div>
         <div>
            {/* <div>{props.address.city}</div>
            <div>{props.address.country}</div> */}
         </div>
      </div>
   )
}
export default User;