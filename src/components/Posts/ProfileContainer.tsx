import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { StateType } from "../../redux/redux-store";
import {
   updateNewPostText,
   addPost,
   ProfilePageType,
   setUserProfile,
   UserProfileType,
   getProfile,
   setStatusThunk,
   getUserStatus
} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { useParams } from "react-router-dom";

export type ProfileContainerPropsType = {
   profilePage: ProfilePageType
   userProfile: UserProfileType
   setUserProfile: (userProfile: UserProfileType) => void
   idMyProfile: number
   getProfile: (id: number) => void
   authMe: boolean
   setStatusThunk: (status: string | null) => void
   status: string | null
   getUserStatus: (id: number) => void
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

   const params = useParams();
   useEffect(() => {
      let id = params.id ? +params.id : props.idMyProfile;
      props.getProfile(id);
      props.getUserStatus(id)
   }, [params.id, props.userProfile.userId]);

   const updateStatus = (status: string | null) => {
      props.setStatusThunk(status);
   }
   // if (!props.authMe) return <Navigate to="/login" />
   return (
      <Profile status={props.status} updateStatus={updateStatus} profilePage={props.profilePage} userProfile={props.userProfile} />
   )
}

export type ProfileContainerType = typeof ProfileContainer;

const WithAuthRedirectProfileContainer = withAuthRedirect(ProfileContainer)
// (props: ProfileContainerPropsType) => {
//    if (!props.authMe) return <Navigate to="/login" />
//    return <ProfileContainer {...props} />
// }

const mstp = (state: StateType) => {
   return {
      profilePage: state.profilePage,
      userProfile: state.profilePage.userProfile,
      idMyProfile: state.authPage.id,
      authMe: state.authPage.isAuth,
      status: state.profilePage.status
   }
}
export default connect(mstp, {
   updateNewPostText,
   addPost,
   setUserProfile,
   getProfile,
   setStatusThunk,
   getUserStatus
})(WithAuthRedirectProfileContainer);