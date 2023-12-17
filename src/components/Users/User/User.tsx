import React from "react";
import styles from './User.module.css'
import { Link } from "react-router-dom";


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
            <Link to={`/profile/${props.id}`}>

               <div className={styles.imgContainer}><img src={props.photos || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ArKQ5AIUqacA-5ofQ5nfPevwR0RtI7PBtg&usqp=CAU"} alt="" /></div>
            </Link>
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
            address
            {/* <div>{props.address.city}</div> */}
            {/* <div>{props.address.country}</div> */}
         </div>
      </div>
   )
}
export default User;