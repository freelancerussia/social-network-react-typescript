import React, { ChangeEvent } from "react";
import { PostType } from "../../../redux/state";

import { ProfileReducerActionType, addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import MyPost from "./MyPosts";



type MyPostPropsType = {
   posts: Array<PostType>
   newPostText: string
   dispatch: (action: ProfileReducerActionType) => void
}


const MyPostContainer = (props: MyPostPropsType) => {

   const addPost = () => {
      props.dispatch(addPostAC());
   }
   const updateNewPostText = (newText: string) => {
      props.dispatch(updateNewPostTextAC(newText))
   }

   return (
      <MyPost posts={props.posts} updateNewPostText={updateNewPostText} addPost={addPost} newPostText={props.newPostText} />
   )
}
export default MyPostContainer;
