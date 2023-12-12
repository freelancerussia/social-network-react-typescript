import React, { ChangeEvent } from "react";
import styles from "./Dialogs.module.css"
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { DialogsPageType } from "../../redux/state";
import { Myform } from "../UI/Myform/Myform";


type DialogsPropsType = {
   dialogsPage: DialogsPageType
   updateNewMessageText: (newMessage: string) => void
   addNewMessage: () => void


}
const Dialogs = (props: DialogsPropsType) => {

   const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewMessageText(e.currentTarget.value)
   }
   const addNewMessage = () => {
      props.addNewMessage();
   }

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialog__items}>
            {
               props.dialogsPage.dialogs.map(d => {
                  return (
                     <Dialog key={d.id} id={d.id} name={d.name} />
                  )
               })
            }

         </div>
         <div className={styles.messages}>

            {
               props.dialogsPage.messages.map(m => {
                  return (
                     <Message key={m.id} message={m.message} />
                  )
               })
            }
            <Myform textValue={props.dialogsPage.newMessageText}
               onChangeHandler={updateNewMessageText}
               sendText={addNewMessage}
               buttonCaption="Send" />

         </div>
      </div>
   )
}
export default Dialogs;