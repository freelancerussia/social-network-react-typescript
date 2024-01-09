import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Posts/ProfileContainer';
import { SidebarType } from './redux/sidebarReducer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { authAPI } from './api';
import { useDispatch } from 'react-redux';
import { me, setInizializeStatus } from './redux/authReducer';
import { useSelector } from 'react-redux';
import { StateType } from './redux/redux-store';
import Preloader from './components/UI/Preloader/Preloader';

const Music = lazy(() => import('./components/Music/Music'))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))

type AppPropsType = {
  sideBar: SidebarType
}

function App(props: AppPropsType) {

  let state = useSelector((state: StateType) => state.authPage)
  let isAuth = state.isAuth;
  let inizialize = state.inizialize;


  const dispatch = useDispatch();
  useEffect(() => {
    let promise = authAPI.me();
    promise
      .then(response => {
        // console.log(response);
        if (response.data.resultCode === 0) {
          dispatch(me({
            login: response.data.data.login,
            email: response.data.data.email,
            isAuth: true,
            id: response.data.data.id
          }))
        }
        dispatch(setInizializeStatus(true));

      })
    // authMe()
  }, [isAuth])
  console.log("!!!!!!!!!!!!!!!!", !inizialize);
  if (!inizialize) return <Preloader />




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
            <Route path="/dialogs/*" element={
              <Suspense fallback={<Preloader />}>
                <DialogsContainer />
              </Suspense>
            } />
            <Route path="/music" element={
              <Suspense fallback={<Preloader />}>
                <Music />
              </Suspense>
            } />
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
