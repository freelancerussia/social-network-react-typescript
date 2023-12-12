import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Posts/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { DialogsPageType, DispatchActionType, ProfilePageType, SidebarType } from './redux/state';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sideBar: SidebarType
  dispatch: (action: DispatchActionType) => void
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar navMenu={props.sideBar.navMenu} friendsList={props.sideBar.friendsList} />
        <div className='content'>
          <Routes>
            <Route path="/profile/*" element={<Profile profilePage={props.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<DialogsContainer dialogsPage={props.dialogsPage} dispatch={props.dispatch} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
