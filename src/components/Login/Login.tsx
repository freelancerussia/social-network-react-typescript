import { Formik } from "formik";
import React from "react";
import { usersAPI } from "../../api";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux-store";
const Login = () => {

   const dispatch = useDispatch();
   const state = useSelector((state: StateType) => state.authPage);



   type ValuesFormType = {
      email: string
      password: string
   }
   type OnSubmitFormObjType = {
      setStatus: (status?: string | null) => void
      setSubmitting: (isSubmitting: boolean) => void
   }
   const onSubmitForm = (values: ValuesFormType, { setSubmitting, setStatus }: OnSubmitFormObjType) => {
      usersAPI.login(values.email, values.password, false)
         .then(response => {
            if (response.data.resultCode === 0) {
               console.log(response.data);
               dispatch(login({ id: response.data.data.userId, isAuth: true }));
            }
            else {
               setStatus(response.data.messages[0] || null)
               console.log(response.data);

            }
            setSubmitting(false);
         })
   }

   // const validateFields = (values: ValuesFormType) => {
   //    const errors: { email?: string } = {
   //       email: ""
   //    };
   //    if (!values.email) {
   //       errors.email = 'Required';
   //    } else if (
   //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
   //    ) {
   //       errors.email = 'Invalid email address';
   //    }
   //    console.log(errors);

   //    return errors;
   // }

   if (state.isAuth) return <Navigate to="/profile" />
   return (
      <div>
         <h1>LOGIN</h1>
         <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmitForm}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
               status
               /* and other goodies */
            }) => (
               <form onSubmit={handleSubmit}>
                  <div>
                     <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                     />
                  </div>


                  {/* {errors.email && touched.email && errors.email} */}
                  <div>
                     <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                     />
                  </div>

                  {/* {errors.password && touched.password && errors.password} */}
                  {status ? <div>{status}</div> : null}

                  <button type="submit" disabled={isSubmitting}>
                     Submit
                  </button>
               </form>
            )}
         </Formik>
      </div>
   )
}
export default Login;