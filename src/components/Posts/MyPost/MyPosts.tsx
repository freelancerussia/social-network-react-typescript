import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import { v1 } from "uuid";

type PostType = {
   id: string
   text: string
   likesCount: number
}

const MyPost = () => {

   const postData: Array<PostType> = [
      { id: v1(), text: "qwer", likesCount: 30 },
      { id: v1(), text: "bgtrdc", likesCount: 3 },
      { id: v1(), text: "qazzzz", likesCount: 340 },
      { id: v1(), text: "xxxxx", likesCount: 20 },
   ]

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
         {
            postData.map(p => {
               return (
                  <Post key={p.id} text={p.text} likesCount={p.likesCount} />

               )
            })
         }
      </div>
   )
}
export default MyPost;