import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPost = () => {
   return (
      <div>
         <h3>My Posts</h3>
         <div className={styles.post__form}>
            <input type="text" />
            <button> Add post</button>
         </div>
         <Post />
         <Post />
         <Post />

      </div>
   )
}
export default MyPost;