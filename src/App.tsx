import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Posts/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { StoreType } from '.';

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/profile" element={<Profile posts={props.store.postData} />} />
            <Route path="/dialogs/*" element={<Dialogs messagesData={props.store.messagesData} dialogsData={props.store.dialogsData} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
