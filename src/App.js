import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe'
import { MyWork } from './components/MyWork/MyWork';
import { Resume } from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<MyWork />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/aboutme' element={<AboutMe />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;