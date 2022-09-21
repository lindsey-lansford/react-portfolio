import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/react-portfolio" element={<Home />}/>
          <Route path="/about/*" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/about" />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

