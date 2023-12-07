import React from "react";
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <ul className={styles.nav__list}>
            <li className={styles.nav__element}>
               <NavLink className={styles.nav__link} to="/profile">Profile</NavLink>
            </li>
            <li className={styles.nav__element}>
               <NavLink className={styles.nav__link} to="/dialogs">Messages</NavLink>
            </li>
            <li className={styles.nav__element}>
               <NavLink className={styles.nav__link} to="/music">Music</NavLink>
            </li>
            <li className={styles.nav__element}>
               <NavLink className={styles.nav__link} to="/other">other</NavLink>
            </li>
         </ul>
      </nav>
   )
}
export default Navbar;