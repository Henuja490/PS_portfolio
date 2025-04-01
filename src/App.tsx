import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Hero from './components/Hero';
import Assignment from './components/Assignment';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from './components/BlogDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/PS_portfolio'>
      <Navbar />
      <Hero />
      <div className="container mt-5">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/assignment/:id" element={<BlogDetails />} />
        </Routes>
      </div><br></br>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
