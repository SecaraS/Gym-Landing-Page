import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
