import { StateType } from "../../../redux/state";

import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import MyPost from "./MyPosts";
import { AppDispatch } from "../../../redux/redux-store";
import { connect } from "react-redux";


let mstp = (state: StateType) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,

   }
}
let mdtp = (dispatch: AppDispatch) => {
   return {
      updateNewPostText: (newText: string) => {
         dispatch(updateNewPostTextAC(newText));
      },
      addPost: () => {
         dispatch(addPostAC());
      },

   }
}


const MyPostContainer = connect(mstp, mdtp)(MyPost);


export default MyPostContainer;