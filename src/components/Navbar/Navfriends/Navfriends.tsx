import React from "react";
import Friendpriview from "./Friendpreview/Friendpriview";
import styles from './../Navbar.module.css'
import { FrindType } from "../../../redux/sidebarReducer";

type NavfriendsPropsType = {
   friendsList: Array<FrindType>
}

const Navfriends = (props: NavfriendsPropsType) => {
   return (
      <div className={styles.friendsList} >
         {
            props.friendsList.map(f => {
               return (
                  <Friendpriview key={f.id} name={f.name} id={f.id} />
               )
            })
         }
      </div>
   )
}
export default Navfriends;