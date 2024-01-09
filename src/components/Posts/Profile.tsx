import React from "react";
// import styles from "./Profile.module.css"
import Profileinfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType, UserProfileType } from "../../redux/profileReducer";
import MyPostContainer from "./MyPost/MyPostsContainer";

type ProfilePropsType = {
   profilePage: ProfilePageType
   userProfile: UserProfileType
   updateStatus: (status: string | null) => void
   status: string | null
}

const Profile = (props: ProfilePropsType) => {
   console.log("RENDER CONTAINER");

   return (
      <div>
         <Profileinfo status={props.status} updateStatus={props.updateStatus} userProfile={props.userProfile} />
         <MyPostContainer />

      </div>
   )
}
export default Profile;