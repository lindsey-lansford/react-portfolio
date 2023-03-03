import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import ContactMe from "./pages/ContactMe";
// import Portfolio from "./pages/Portfolio";
import Portfolio from "./pages/CardLayout";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLayout from "./pages/CardLayout";

function App() {
  return (
    <Router basename="/react-portfolio">
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<CardLayout />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
