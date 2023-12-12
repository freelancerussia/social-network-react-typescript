import React from "react";
// import styles from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "./../../redux/state";
import { ProfileReducerActionType } from "../../redux/profileReducer";
import MyPostContainer from "./MyPost/MyPostsContainer";

type ProfilePropsType = {
   profilePage: ProfilePageType
   dispatch: (action: ProfileReducerActionType) => void
}

const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <Profileinfo />
         <MyPostContainer posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />

      </div>
   )
}
export default Profile;