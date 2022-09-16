import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router basename="/react-portfolio">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
