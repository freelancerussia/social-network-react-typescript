import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { StateType, baseUrl } from "../../redux/redux-store";
import {
   updateNewPostText,
   addPost,
   ProfilePageType,
   setUserProfile,
   UserProfileType,
   getProfile
} from "../../redux/profileReducer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { usersAPI } from "../../api";

type ProfileContainerPropsType = {
   profilePage: ProfilePageType
   userProfile: UserProfileType
   setUserProfile: (userProfile: UserProfileType) => void
   idMyProfile: number
   getProfile: (id: number) => void
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

   const params = useParams();
   useEffect(() => {
      let id = params.id ? +params.id : props.idMyProfile;

      props.getProfile(id)


   }, [params.id, props.userProfile.userId]);

   return (
      <Profile profilePage={props.profilePage} userProfile={props.userProfile} />
   )
}

const mstp = (state: StateType) => {
   return {
      profilePage: state.profilePage,
      userProfile: state.profilePage.userProfile,
      idMyProfile: state.authPage.id
   }
}
export default connect(mstp, {
   updateNewPostText,
   addPost,
   setUserProfile,
   getProfile
})(ProfileContainer);