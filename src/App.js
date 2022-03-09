import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe'
import { MyWork } from './components/MyWork/MyWork';
import { Contact } from './components/Contact/Contact'


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;