import React from "react";
import styles from "./Preloader.module.css"


import loading from "../../../assets/loading.gif"
const Preloader = () => {
   return (
      <div className={styles.container}>
         <img src={loading} alt="loading data" />
      </div>
   )
}
export default Preloader;