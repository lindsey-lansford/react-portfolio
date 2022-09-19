import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about/*" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

