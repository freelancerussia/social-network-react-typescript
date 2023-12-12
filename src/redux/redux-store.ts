// import { RootState } from './redux-store';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";



let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebarPage: sidebarReducer,
});
let store = configureStore({
   reducer: reducers,
});

// type ReducersType = ReturnType<typeof reducer>

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type StateType = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;