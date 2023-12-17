import React from "react";
import styles from "./Profileinfo.module.css"
import { UserProfileType } from "../../../redux/profileReducer";
import userImg from "../../../assets/USER.png"
import Contacts from "../../UI/Contacts/Contacts";

type ProfileInfoPropsType = {
   userProfile: UserProfileType
}
const Profileinfo = (props: ProfileInfoPropsType) => {
   return (
      <div>
         <div className={styles.posts__bg}>
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph" alt="" />
         </div>
         <div>
            <div className={styles.userImg}>
               <img src={props.userProfile.photos.large ? props.userProfile.photos.large : userImg} alt="" />
            </div>
            <div className={styles.userInfo}>
               <div className={styles.fullName}>
                  {props.userProfile.fullName}
               </div>
               <div className={styles.aboutMe}>
                  {props.userProfile.aboutMe}
               </div>
            </div>
            <div className={styles.jobFind}>
               {props.userProfile.lookingForAJob ? `${props.userProfile.lookingForAJobDescription}` : "i have a WORK"}
            </div>
            <div className={styles.contacts}>
               {/* <Contacts contacts={props.userProfile.contacts} /> */}
               contacts
            </div>
         </div>
      </div>
   )
}
export default Profileinfo;