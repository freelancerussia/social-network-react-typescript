import { addNewMessagetAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { AppDispatch, StateType, } from "../../redux/redux-store";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


// const WithAuthRedirectDialogsContainer = withAuthRedirect(Dialogs)

let mstp = (state: StateType) => {
   return {
      dialogsPage: state.dialogsPage,
      authMe: state.authPage.isAuth
   }
}
let mdtp = (dispatch: AppDispatch) => {
   return {
      updateNewMessageText: (newMessage: string) => {
         dispatch(updateNewMessageTextAC(newMessage))
      },
      addNewMessage: () => {
         dispatch(addNewMessagetAC())
      },

   }
}

let DialogsContainer = connect(mstp, mdtp)(Dialogs)
export default DialogsContainer;