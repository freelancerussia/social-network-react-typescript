import React, { ChangeEvent } from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import { PostType } from "../../../redux/state";

import { Input } from 'antd';
import { ProfileReducerActionType, addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { Myform } from "../../UI/Myform/Myform";



type MyPostPropsType = {
   posts: Array<PostType>
   newPostText: string
   updateNewPostText: (newText: string) => void
   addPost: () => void
}


const MyPost = (props: MyPostPropsType) => {

   const addPost = () => {
      props.addPost();
   }
   const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewPostText(e.currentTarget.value)
   }

   return (
      <div>
         <h3>My Posts</h3>
         <div className={styles.post__form}>
            <Myform textValue={props.newPostText} onChangeHandler={updateNewPostText} sendText={addPost} buttonCaption="Add post" />
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
