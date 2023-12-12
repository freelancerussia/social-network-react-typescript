import React from "react";
// import styles from "./Profile.module.css"
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
         <MyPostContainer />

      </div>
   )
}
export default Profile;