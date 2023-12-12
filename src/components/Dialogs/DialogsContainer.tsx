import React, { ChangeEvent } from "react";
import { DialogsPageType } from "../../redux/state";
import { DialogsReducerActionType, addNewMessagetAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
   dialogsPage: DialogsPageType
   dispatch: (action: DialogsReducerActionType) => void

}
const DialogsContainer = (props: DialogsPropsType) => {

   const updateNewMessageText = (newMessage: string) => {
      props.dispatch(updateNewMessageTextAC(newMessage))
   }
   const addNewMessage = () => {
      props.dispatch(addNewMessagetAC());
   }

   return (
      <Dialogs updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage} dialogsPage={props.dialogsPage} />
   )
}
export default DialogsContainer;