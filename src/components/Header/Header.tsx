import React from "react";
import styles from "./Header.module.css"

const Header = () => {
   return (
      <header className={styles.header}>
         <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg" alt="" />
         <div className={styles.header__title}> VSETI</div>
      </header>
   )
}
export default Header;