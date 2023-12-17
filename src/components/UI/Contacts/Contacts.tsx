import React from "react";
import { ContactsUserType } from "../../../redux/profileReducer";
import Contact from "./Contact/Contact";
type ContactsPropsType = {
   contacts: ContactsUserType
}
export type ContactType = {
   [key: string]: string | null
}
const Contacts = (props: ContactsPropsType) => {
   let contactsArr = [];

   for (let key in props.contacts) {
      let obj: ContactType = {};
      obj[`${key}`] = props.contacts[key];
      contactsArr.push(obj);
   }

   return (
      <div>
         {
            contactsArr.map(c => {
               return (
                  // <Contact contact={c} />
                  <div>{ }</div>
               )
            })
         }
      </div>
   )
}
export default Contacts;