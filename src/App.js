import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { MyWork } from './components/MyWork/MyWork';
import { Home } from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<MyWork />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;