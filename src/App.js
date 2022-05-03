import './App.css';
import Header from './views/Layout/Header';
import Footer from './views/Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import BenchmarkingServices from './views/BenchmarkingServices';
import Contact from './views/Contact';
import Faq from './views/Faq';
import Knowledge from './views/Knowledge';
import GetStarted from './views/GetStarted';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/BenchmarkingServices" element={<BenchmarkingServices />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Knowledge" element={<Knowledge />} />
          <Route path="/GetStarted" element={<GetStarted />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
