import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route to redirect to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
