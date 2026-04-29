import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import MainMenu from "./components/layouts/MainMenu";
import Footer from "./components/layouts/Footer";
import FloatingLogo from "./components/layouts/FloatingLogo";
import ScrollToTop from "./components/layouts/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Company from "./pages/Company";
import Careers from "./pages/Careers";
import Specialists from "./pages/Specialists";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="header-wrapper">
        <Navbar />
        <MainMenu />
      </div>
      <FloatingLogo />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element ={<Company />} />
        <Route path="/careers" element = {<Careers />} />
        <Route path="/specialists" element = {<Specialists />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;