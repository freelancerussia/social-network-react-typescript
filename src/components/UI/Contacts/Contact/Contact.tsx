import React from "react";
import { ContactType } from "../Contacts";

type ContactPropsType = {
   contact: ContactType
}
const Contact = (props: ContactPropsType) => {
   let keyF = "";
   let valueF: string | null = null
   for (let key in props.contact) {
      keyF = key;
      valueF = props.contact[key]

      return (
         <div>
            {
               valueF ? <img src={valueF} alt="" /> : ""
            }
         </div>
      )
   }
}


export default Contact;