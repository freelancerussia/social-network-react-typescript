import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { DialogsPageType } from "../../redux/state";


type DialogsPropsType = {
   dialogsPage: DialogsPageType

}
const Dialogs = (props: DialogsPropsType) => {

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
         </div>
      </div>
   )
}
export default Dialogs;