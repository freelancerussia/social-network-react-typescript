import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Posts/ProfileContainer';
import { SidebarType } from './redux/sidebarReducer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

type AppPropsType = {
  sideBar: SidebarType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Navbar navMenu={props.sideBar.navMenu} friendsList={props.sideBar.friendsList} />
        <div className='content'>
          <Routes>
            <Route path="/profile/" element={<ProfileContainer />} >
              <Route path=":id" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
