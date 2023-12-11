import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { StateType } from "./redux/state"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let rerenderEntire = (state: StateType) => root.render(
  <React.StrictMode>
    <App profilePage={state.profilePage}
      dialogsPage={state.dialogsPage}
      sideBar={state.sidebar} />
  </React.StrictMode>
);
rerenderEntire(store.getState());

store.subscriber(rerenderEntire)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
