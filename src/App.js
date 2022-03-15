import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import { Main } from './components/Main/Main';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { CaseStudy1 } from './components/CaseStudy1/CaseStudy1';
import { CaseStudy2 } from './components/CaseStudy2/CaseStudy2';
import { CaseStudy3 } from './components/CaseStudy3/CaseStudy3';
import { CaseStudy4 } from './components/CaseStudy4/CaseStudy4';
import './App.css';
import { CaseStudy1Mobile } from './components/CaseStudy1Mobile/CaseStudy1Mobile';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  // useEffect(() => {
  //   window.addEventListener("load", updateWidth);
  //   return () => window.removeEventListener("load", updateWidth);
  // });

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  // const location = useLocation();
  // useEffect(() => {
  // 	window.scrollTo(0, 0);
  // }, [location]);

  console.log(width);

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path='/' element={<Main width={width} />} />
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