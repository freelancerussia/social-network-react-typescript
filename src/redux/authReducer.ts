import { createSlice } from "@reduxjs/toolkit";

export type AuthStateType = {
   email: string | null
   isAuth: boolean
   login: string | null
}

const initialState: AuthStateType = {
   email: "",
   isAuth: false,
   login: ""
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      me(state, action) {
         state.email = action.payload.email
         state.login = action.payload.login
         state.isAuth = action.payload.isAuth
      }
   }
});


export const { me } = authSlice.actions;

export default authSlice.reducer;