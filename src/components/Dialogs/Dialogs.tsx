import React from "react";
import styles from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

const Dialogs = () => {
   return (
      <div className={styles.dialogs}>
         <div className={styles.dialog__items}>
            <NavLink to={`/dialogs/${1}`} className={navLink => navLink.isActive ? styles.active : styles.dialog}>Valera</NavLink>
            <NavLink to={`/dialogs/${12}`} className={navLink => navLink.isActive ? styles.active : styles.dialog}>huera</NavLink>
            <NavLink to={`/dialogs/${13}`} className={navLink => navLink.isActive ? styles.active : styles.dialog}>ewwe  </NavLink>
         </div>
         <div className={styles.messages}>
            <div className={styles.message}>hi</div>
            <div className={styles.message}>hey</div>
            <div className={styles.message}>qq</div>
         </div>
      </div>
   )
}
export default Dialogs;