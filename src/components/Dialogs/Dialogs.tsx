import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { DialogType, MessageType } from "../..";

// type MessageType = {
//    id: string
//    message: string
// }
// type DialogType = {
//    id: string
//    name: string
// }

type DialogsPropsType = {
   messagesData: Array<MessageType>
   dialogsData: Array<DialogType>

}

const Dialogs = (props: DialogsPropsType) => {

   // const messagesData: Array<MessageType> = [
   //    { id: v1(), message: "hi" },
   //    { id: v1(), message: "yo" },
   //    { id: v1(), message: "qqqq" },
   // ]
   // const dialogsData: Array<DialogType> = [
   //    { id: v1(), name: "Valera" },
   //    { id: v1(), name: "Sanya" },
   //    { id: v1(), name: "Sasha" },
   // ]
   return (
      <div className={styles.dialogs}>
         <div className={styles.dialog__items}>
            {
               props.dialogsData.map(d => {
                  return (
                     <Dialog key={d.id} id={d.id} name={d.name} />
                  )
               })
            }

         </div>
         <div className={styles.messages}>

            {
               props.messagesData.map(m => {
                  return (
                     <Message key={m.id} message={m.message} />
                  )
               })
            }
         </div>
      </div>
   )
}
export default Dialogs;