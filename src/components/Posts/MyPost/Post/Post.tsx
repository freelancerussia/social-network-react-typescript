import React from "react";
import styles from "./Post.module.css"

type PostPropsType = {
   text: string
   likesCount: number
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
         <div className={styles.likes}>LIKES: {props.likesCount}</div>
      </div>
   )
}
export default Post;