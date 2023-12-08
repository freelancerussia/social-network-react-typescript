import React from "react";
import styles from "./Message.module.css"

type MessagePropsType = {
   message: string
}

const Message = (props: MessagePropsType) => {
   return (
      <div className={styles.message}>{props.message}</div>
   )
}
export default Message;