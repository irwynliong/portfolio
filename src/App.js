import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home'; // Import Home component
import Portfolio from './components/portfolio/portfolio';
import Ocsp from './components/pages/ocsp';
import Noc from './components/pages/noc';
import Life from './components/pages/life';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will always be displayed */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page displaying Intro, About, and Contact */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio Page */}
          <Route path="/ocsp" element={<Ocsp />} />
          <Route path="/noc" element={<Noc />} />
          <Route path="/life" element={<Life />} />
        </Routes>
        <Footer /> {/* Footer will always be displayed */}
      </div>
    </Router>
  );
}

export default App;
