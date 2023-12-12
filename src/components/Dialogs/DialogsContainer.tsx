import React, { ChangeEvent, useContext } from "react";
import { DialogsPageType } from "../../redux/state";
import { DialogsReducerActionType, addNewMessagetAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { StoreContext } from "../../redux/redux-store";


type DialogsPropsType = {
   // dialogsPage: DialogsPageType
   // dispatch: (action: DialogsReducerActionType) => void

}
const DialogsContainer = (props: DialogsPropsType) => {

   let store = useContext(StoreContext);
   let dialogsPage = store.getState().dialogsPage;


   const updateNewMessageText = (newMessage: string) => {
      store.dispatch(updateNewMessageTextAC(newMessage))
   }
   const addNewMessage = () => {
      store.dispatch(addNewMessagetAC());
   }

   return (
      <Dialogs updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage} dialogsPage={dialogsPage} />
   )
}
export default DialogsContainer;