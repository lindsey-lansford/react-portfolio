import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
// import { Box } from '@mui/material';

function App() {
  return (
    <Router basename="/react-portfolio">
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<About />} /> */}
          </Routes>
          {/* <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} width={'100%'}>
        <span>&copy; 2022 🧿Lindsey Lansford | Software Developer</span>
        </Box> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
