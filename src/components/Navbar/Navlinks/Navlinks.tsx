import React from "react";
import styles from "./../Navbar.module.css"
import { NavLink } from "react-router-dom";
import { MenuType } from "../../../redux/state";

type NavLinksPropsType = {
   navMenu: Array<MenuType>
}

const Navlinks = (props: NavLinksPropsType) => {
   return (
      <ul className={styles.nav__list}>
         {
            props.navMenu.map(m => {
               return (
                  <li key={m.id} className={styles.nav__element}>
                     <NavLink className={navData => navData.isActive ? styles.active : styles.nav__link} to={"/" + m.path}>{m.title}</NavLink>
                  </li>
               )
            })
         }
      </ul>
   )
}
export default Navlinks;