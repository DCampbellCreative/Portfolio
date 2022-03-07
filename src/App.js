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
      {/* <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/aboutme' element={<AboutMe />} />
          <Route exact path='/projects' element={<MyWork />} />
          <Route exact path='/contact' element={<Contact />} />

        </Routes>
      </Router> */}
      {/* <Route exact path='/' element={<Home />} /> */}


      {/* <NavBarSpacer /> */}

      <NavBar />

      {/* <NavBarSpacer /> */}
      <Home />
      <AboutMe />
      <MyWork />
      <Contact />
    </div>

  );
}

export default App;