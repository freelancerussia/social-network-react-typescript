import React from "react";
import styles from "./Header.module.css"
import { AuthStateType } from "../../redux/authReducer";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
   state: AuthStateType
}

const Header = (props: HeaderPropsType) => {
   return (
      <header className={styles.header}>
         <div className={styles.logo_info}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg" alt="" />
            <div className={styles.header__title}> VSETI</div>
         </div>
         <div>
            login:{props.state.isAuth ? props.state.login : <NavLink to="/login">SING IN</NavLink>}
         </div>
      </header>
   )
}
export default Header;