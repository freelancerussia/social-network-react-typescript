import React, { ChangeEvent, useState } from "react";
import styles from "./Profileinfo.module.css"
import { UserProfileType, setStatusThunk } from "../../../redux/profileReducer";
import userImg from "../../../assets/USER.png"
import Contacts from "../../UI/Contacts/Contacts";
import { usersAPI } from "../../../api";

type ProfileInfoPropsType = {
   userProfile: UserProfileType
   updateStatus: (status: string | null) => void
   status: null | string
}
const Profileinfo = (props: ProfileInfoPropsType) => {
   const [status, setStatus] = useState<string | null>(props.status);
   const [isChanged, setIsChanged] = useState(false);

   const onBlurInput = () => {
      setIsChanged(false);
      props.updateStatus(status);
      // usersAPI.setStatus(status)
      //    .then(response => {
      //       console.log(response);
      //    })
   }
   const onDoubleClickDiv = () => {
      setIsChanged(true)
   }
   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div>
         {/* <div className={styles.posts__bg}>
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph" alt="" />
         </div> */}
         <div>
            <div className={styles.userImg}>
               <img src={props.userProfile.photos.large ? props.userProfile.photos.large : userImg} alt="" />
            </div>
            <div>
               {isChanged
                  ? <input autoFocus onBlur={onBlurInput} type="text" value={status ? status : "CHANGE STATUS"} onChange={onChangeInput} />
                  : <div onDoubleClick={onDoubleClickDiv}>{props.status}</div>}
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