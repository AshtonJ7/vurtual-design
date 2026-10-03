import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/PrivacyPolicy";

import './styles/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
    <Router basename="/vurtual-design">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;