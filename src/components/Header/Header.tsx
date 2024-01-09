import React from "react";
import styles from "./Header.module.css"
import { AuthStateType, logout } from "../../redux/authReducer";
import { NavLink } from "react-router-dom";
import { Button } from "antd/es/radio";
import { usersAPI } from "../../api";
import { useDispatch } from "react-redux";

type HeaderPropsType = {
   state: AuthStateType
}

const Header = (props: HeaderPropsType) => {
   const dispatch = useDispatch()

   const onLogout = () => {
      usersAPI.logOut()
         .then(response => {
            console.log(response);
            if (response.data.resultCode === 0) {
               dispatch(logout());
            }
         })

   }

   return (
      <header className={styles.header}>
         <div className={styles.logo_info}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg" alt="" />
            <div className={styles.header__title}> VSETI</div>
         </div>
         <div>
            login:{props.state.isAuth ? props.state.login : <NavLink to="/login">SING IN</NavLink>}
            <div>{props.state.isAuth ? <Button onClick={onLogout}>Logout</Button> : <NavLink to="/login"><Button>Login</Button> </NavLink>}</div>
         </div>
      </header>
   )
}
export default Header;