import React from "react";
import { NavLink } from "react-router-dom"
import styles from "./Dialog.module.css"
type DialogPropsType = {
   id: string,
   name: string
}

const Dialog = (props: DialogPropsType) => {
   return (
      <NavLink to={`/dialogs/${props.id}`} className={navLink => navLink.isActive ? styles.active : styles.dialog}>{props.name}</NavLink>

   )
}
export default Dialog;