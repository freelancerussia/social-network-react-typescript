import React, { ChangeEvent } from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import { PostType } from "../../../redux/state";
import { Button } from "antd";

import { Input } from 'antd';
import { ProfileReducerActionType, addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";

const { TextArea } = Input;

type MyPostPropsType = {
   posts: Array<PostType>
   newPostText: string
   dispatch: (action: ProfileReducerActionType) => void
}


const MyPost = (props: MyPostPropsType) => {

   const addPost = () => {
      props.dispatch(addPostAC());
   }
   const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(updateNewPostTextAC(e.currentTarget.value))
   }

   return (
      <div>
         <h3>My Posts</h3>
         <div className={styles.post__form}>
            <div className={styles.textarea}>
               <TextArea value={props.newPostText} onChange={updateNewPostText} autoSize placeholder="Enter your message"></TextArea>
            </div>
            <div>
               <Button onClick={addPost} > Add post</Button>
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