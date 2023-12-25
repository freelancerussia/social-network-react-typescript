import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { StateType, baseUrl } from "../../redux/redux-store";
import { updateNewPostText, addPost, ProfilePageType, setUserProfile, UserProfileType } from "../../redux/profileReducer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { usersAPI } from "../../api";

type ProfileContainerPropsType = {
   profilePage: ProfilePageType
   userProfile: UserProfileType
   setUserProfile: (userProfile: UserProfileType) => void
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

   const params = useParams();
   useEffect(() => {
      let id = params.id ? +params.id : 2;
      usersAPI.getProfile(id)
         // await axios.get<UserProfileType>(`${baseUrl}profile/${params.id ? params.id : 2}`)
         .then(response => {
            // console.log(response);
            props.setUserProfile(response.data)
         })

   }, []);

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