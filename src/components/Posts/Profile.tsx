import React from "react";
// import styles from "./Profile.module.css"
import Profileinfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType, UserProfileType } from "../../redux/profileReducer";
import MyPostContainer from "./MyPost/MyPostsContainer";

type ProfilePropsType = {
   profilePage: ProfilePageType
   userProfile: UserProfileType
}

const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <Profileinfo userProfile={props.userProfile} />
         <MyPostContainer />

      </div>
   )
}
export default Profile;