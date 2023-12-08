import React from "react";
import styles from "./Profileinfo.module.css"
const Profileinfo = () => {
   return (
      <div>
         <div className={styles.posts__bg}>
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph" alt="" />
         </div>
         <div>
            ava+desc
         </div>
      </div>
   )
}
export default Profileinfo;