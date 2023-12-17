import React from "react";
import styles from "./Navbar.module.css"
import Navlinks from "./Navlinks/Navlinks";
import Navfriends from "./Navfriends/Navfriends";
import { FrindType, MenuType } from "../../redux/sidebarReducer";

type NavBarPropsType = {
   navMenu: Array<MenuType>
   friendsList: Array<FrindType>
}

const Navbar = (props: NavBarPropsType) => {
   return (
      <nav className={styles.navbar}>
         <Navlinks navMenu={props.navMenu} />
         <Navfriends friendsList={props.friendsList} />

      </nav>
   )
}
export default Navbar;