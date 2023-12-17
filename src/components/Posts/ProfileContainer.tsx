import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { StateType, baseUrl } from "../../redux/redux-store";
import { updateNewPostText, addPost, ProfilePageType, setUserProfile, UserProfileType } from "../../redux/profileReducer";
import axios from "axios";

type ProfileContainerPropsType = {
   profilePage: ProfilePageType
   userProfile: UserProfileType
   setUserProfile: (userProfile: UserProfileType) => void
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

   useEffect(() => {
      async function getProfile() {
         await axios.get<UserProfileType>(`${baseUrl}profile/3`)
            .then(response => {
               console.log(response.data);
               props.setUserProfile(response.data)
            })
      }
      getProfile();
   }, [])
   console.log(props.userProfile);


   return (
      <Profile profilePage={props.profilePage} userProfile={props.userProfile} />
   )
}

const mstp = (state: StateType) => {
   return {
      profilePage: state.profilePage,
      userProfile: state.profilePage.userProfile
   }
}
export default connect(mstp, {
   updateNewPostText,
   addPost,
   setUserProfile
})(ProfileContainer);