import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Main } from './components/Main/Main';
import { CaseStudy1 } from './components/CaseStudy1/CaseStudy1';
import { CaseStudy2 } from './components/CaseStudy2/CaseStudy2';
import { CaseStudy3 } from './components/CaseStudy3/CaseStudy3';
import { CaseStudy4 } from './components/CaseStudy4/CaseStudy4';

import './App.css';


function App() {



  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/reactdex' element={<CaseStudy1 />} />
          <Route exact path='/dontbudge' element={<CaseStudy2 />} />
          <Route exact path='/meet' element={<CaseStudy3 />} />
          <Route exact path='/flixfix' element={<CaseStudy4 />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;