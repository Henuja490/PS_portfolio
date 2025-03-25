import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from './components/Hero';
import Assignment from './components/Assignment';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from './components/BlogDetails';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/assignment/:id" element={<BlogDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
