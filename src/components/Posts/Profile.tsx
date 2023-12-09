import React from "react";
// import styles from "./Profile.module.css"
import MyPosts from "./MyPost/MyPosts";
import Profileinfo from "./ProfileInfo/ProfileInfo";
import { PostType } from "../..";

type ProfilePropsType = {
   posts: Array<PostType>
}

const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <Profileinfo />
         <MyPosts posts={props.posts} />

      </div>
   )
}
export default Profile;