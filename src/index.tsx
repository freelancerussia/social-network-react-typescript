import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { v1 } from 'uuid';

export type StoreType = {
  messagesData: Array<MessageType>
  dialogsData: Array<DialogType>
  postData: Array<PostType>

}

export type MessageType = {
  id: string
  message: string
}
export type DialogType = {
  id: string
  name: string
}

export type PostType = {
  id: string
  text: string
  likesCount: number
}

const store = {
  messagesData: [
    { id: v1(), message: "hi" },
    { id: v1(), message: "yo" },
    { id: v1(), message: "qqqq" },
  ],
  dialogsData: [
    { id: v1(), name: "Valera" },
    { id: v1(), name: "Sanya" },
    { id: v1(), name: "Sasha" },
  ],
  postData: [
    { id: v1(), text: "qwer", likesCount: 30 },
    { id: v1(), text: "bgtrdc", likesCount: 3 },
    { id: v1(), text: "qazzzz", likesCount: 340 },
    { id: v1(), text: "xxxxx", likesCount: 20 },
  ]
}




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
