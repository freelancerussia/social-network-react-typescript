import React from "react";
import styles from "./Friendpriview.module.css"
import { NavLink } from "react-router-dom";

type FriendpriviewPropsType = {
   name: string
   id: string
}
const Friendpriview = (props: FriendpriviewPropsType) => {
   return (
      <NavLink to={"/profile/" + props.id} className={styles.element}>
         <div className={styles.imgContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png" alt="" />
         </div>
         <div>
            {props.name}
         </div>
      </NavLink>
   )
}
export default Friendpriview;