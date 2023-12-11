import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import { PostType } from "../../../redux/state";
import { Button } from "antd";

import { Input } from 'antd';

const { TextArea } = Input;

type MyPostPropsType = {
   posts: Array<PostType>
}


const MyPost = (props: MyPostPropsType) => {

   return (
      <div>
         <h3>My Posts</h3>
         <div className={styles.post__form}>
            <div className={styles.textarea}>
               <TextArea autoSize placeholder="Enter your message"></TextArea>
            </div>
            <div>
               <Button > Add post</Button>
            </div>
         </div>
         {
            props.posts.map(p => {
               return (
                  <Post key={p.id} text={p.text} likesCount={p.likesCount} />
               )
            })
         }
      </div>
   )
}
export default MyPost;