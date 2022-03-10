import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe'
import { MyWork } from './components/MyWork/MyWork';
import { Contact } from './components/Contact/Contact';
import { MyWorkMobile } from './components/MyWorkMobile/MyWorkMobile';


import './App.css';

function App() {

  const [width, setWidth] = useState(false);
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("load", updateWidth);
    return () => window.removeEventListener("load", updateWidth);
  });

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });


  console.log(width);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      {width < 786 ? <MyWorkMobile /> : <MyWork />}
      <Contact />
    </div>
  );
}

export default App;