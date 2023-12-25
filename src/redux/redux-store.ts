// import { RootState } from './redux-store';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReduser from "./usersReducer";
import authReducer from "./authReducer"

export const baseUrl = "https://social-network.samuraijs.com/api/1.0/";


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebarPage: sidebarReducer,
   usersPage: usersReduser,
   authPage: authReducer,
});
let store = configureStore({
   reducer: reducers,
   // middleware(getDefaultMiddleware) => {}
});

// export let StoreContext = createContext(store);

// type ReducersType = ReturnType<typeof reducer>

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type StateType = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;