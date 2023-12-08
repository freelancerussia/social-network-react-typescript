import React from "react";
// import styles from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
   return (
      <div>
         <Profileinfo />
         <MyPosts />

      </div>
   )
}
export default Profile;