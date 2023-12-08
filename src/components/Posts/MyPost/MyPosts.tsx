import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPost = () => {
   return (
      <div>
         <h3>My Posts</h3>
         <div className={styles.post__form}>
            <div>
               <textarea placeholder="Enter your message"></textarea>
            </div>
            <div>
               <button> Add post</button>
            </div>
         </div>
         <Post text="qwer" />
         <Post text="trew" />
         <Post text="zxcvbn" />

      </div>
   )
}
export default MyPost;