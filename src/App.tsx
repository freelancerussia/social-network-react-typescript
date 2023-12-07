import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/profile" element={<Posts />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/music" element={<Music />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
