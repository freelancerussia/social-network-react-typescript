import React from "react";
import styles from "./Post.module.css"

type PostPropsType = {
   text: string
}

const Post = (props: PostPropsType) => {
   return (
      <div className={styles.post}>
         <div className={styles.post__img}>
            <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt="" />
         </div>
         <p>
            {props.text}
         </p>
      </div>
   )
}
export default Post;