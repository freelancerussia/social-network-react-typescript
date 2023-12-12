import React, { ChangeEvent } from "react";
import styles from "./Myform.module.css";
import { Button, Input } from "antd";
// import TextArea from "antd/es/input/TextArea";

const { TextArea } = Input;

type MyformPropsType = {
   textValue: string
   onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
   sendText: () => void
   buttonCaption: string
};
export const Myform = (props: MyformPropsType) => {
   return (
      <div>
         <div className={styles.textarea}>
            <TextArea value={props.textValue} onChange={props.onChangeHandler} autoSize placeholder="Enter your message"></TextArea>
         </div>
         <div>
            <Button onClick={props.sendText}> {props.buttonCaption}</Button>
         </div>
      </div>
   );
};
