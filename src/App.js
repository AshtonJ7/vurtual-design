import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Privacy from "./components/PrivacyPolicy";

=======
>>>>>>> 621b94af1b3c080cbcec39b429c3e3b21e010709
import './styles/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
<<<<<<< HEAD
    <Router basename="/vurtual-design">
=======
    <Router basename="/vurtual-design/">
>>>>>>> 621b94af1b3c080cbcec39b429c3e3b21e010709
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/privacy-policy" element={<Privacy />} />
=======
>>>>>>> 621b94af1b3c080cbcec39b429c3e3b21e010709
          </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;