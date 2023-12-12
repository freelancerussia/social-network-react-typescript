import React, { ChangeEvent } from "react";
import { PostType } from "../../../redux/state";

import { ProfileReducerActionType, addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import MyPost from "./MyPosts";
import { StoreContext } from "../../../redux/redux-store";



type MyPostPropsType = {
   posts: Array<PostType>
   newPostText: string
   dispatch: (action: ProfileReducerActionType) => void
}


const MyPostContainer = (props: MyPostPropsType) => {



   return (
      <StoreContext.Consumer>
         {
            store => {
               const addPost = () => {
                  store.dispatch(addPostAC());
               }
               const updateNewPostText = (newText: string) => {
                  store.dispatch(updateNewPostTextAC(newText))
               }
               return <MyPost posts={props.posts} updateNewPostText={updateNewPostText} addPost={addPost} newPostText={props.newPostText} />
            }
         }
      </StoreContext.Consumer>
   )
}
export default MyPostContainer;
