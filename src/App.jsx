import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import MainMenu from "./components/layouts/MainMenu";
import Footer from "./components/layouts/Footer";
import FloatingLogo from "./components/layouts/FloatingLogo";
import Home from "./pages/Home";
import About from "./pages/About";
import Company from "./pages/Company";

function App() {
  return (
    <Router>
      <div className="header-wrapper">
        <Navbar />
        <MainMenu />
      </div>
      <FloatingLogo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element ={<Company />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;