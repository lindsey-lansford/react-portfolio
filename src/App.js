import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';


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
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router basename="/react-portfolio">
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   </Router>
//   );
// }

