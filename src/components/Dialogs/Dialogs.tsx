import React from "react";
import styles from "./Dialogs.module.css"
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
   return (
      <div className={styles.dialogs}>
         <div className={styles.dialog__items}>
            <Dialog id="1" name="Valera" />
            <Dialog id="2" name="Sanya" />
            <Dialog id="3" name="Sasha" />

         </div>
         <div className={styles.messages}>
            <Message message="hi" />
            <Message message="yo" />
            <Message message="qqqq" />

         </div>
      </div>
   )
}
export default Dialogs;