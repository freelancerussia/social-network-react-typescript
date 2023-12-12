import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { StateType } from "./redux/redux-store"
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let rerenderEntire = (state: StateType) => root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App profilePage={state.profilePage} dispatch={store.dispatch.bind(store)}
        dialogsPage={state.dialogsPage}
        sideBar={state.sidebarPage} />
    </Provider>
  </React.StrictMode>
);
rerenderEntire(store.getState());

store.subscribe(() => rerenderEntire(store.getState()))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
