import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./redux-store";
import { authAPI } from "../api";

export type AuthStateType = {
   email: string | null
   isAuth: boolean
   login: string | null
   id: number
   inizialize: boolean
}

const initialState: AuthStateType = {
   email: "",
   isAuth: false,
   login: "",
   id: 2,
   inizialize: false
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      me(state, action) {
         state.email = action.payload.email
         state.login = action.payload.login
         state.isAuth = action.payload.isAuth
         state.id = action.payload.id
      },
      login(state, action: { payload: { id: number, isAuth: boolean } }) {
         state.id = action.payload.id
         state.isAuth = action.payload.isAuth
      },
      logout(state) {
         state.email = null
         state.login = null
         state.isAuth = false
         state.id = 0
      },
      setInizializeStatus(state, action) {
         state.inizialize = action.payload
      }

   },
   // extraReducers: (builder) => {
   //    builder.addMatcher(me.fulfilled, (state, action) => {

   //    })
   // }
});


export const { me, login, logout, setInizializeStatus } = authSlice.actions;

export default authSlice.reducer;

// export const me = createAsyncThunk(
//    "auth/me",
//    () => {
//       authAPI.me()
//          .then(response => {
//             if (response.data.resultCode === 0) {
//                return { login: response.data.data.login, email: response.data.data.email, isAuth: true, id: response.data.data.id }
//             }

//          }
//          )
//    }

// )