import React, { useEffect } from "react";
import styles from "./Header.module.css"
import Header from "./Header";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux-store";
import { useDispatch } from "react-redux";
import { authAPI } from "../../api";
import { me } from "../../redux/authReducer";

const HeaderContainer = () => {

   let state = useSelector((state: StateType) => state.authPage);
   let dispatch = useDispatch()

   useEffect(() => {
      authAPI.me()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(me({ login: response.data.data.login, email: response.data.data.email, isAuth: true, id: response.data.data.id }))
            }

         })
      // dispatch(authMe())
   }, [])

   return (
      <Header state={state} />
   )
}
export default HeaderContainer;