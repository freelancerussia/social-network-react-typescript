import { Navigate } from "react-router-dom"
import { ProfileContainerPropsType, ProfileContainerType } from "../components/Posts/ProfileContainer"
import { DialogsPropsType, DialogsType } from "../components/Dialogs/Dialogs"

// type ComponentType = ProfileContainerType | DialogsType
type PropsType = ProfileContainerPropsType
const withAuthRedirect = (Component: React.ComponentType<PropsType>) => {
   const WrappedComponent = (props: PropsType) => {
      if (!props.authMe) return <Navigate to="/login" />
      return <Component {...props} />
   }
   return WrappedComponent;
}




export default withAuthRedirect;

