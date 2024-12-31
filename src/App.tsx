import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teams from './components/team/Teams';
import { Home } from './home';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route path="/teams" element={<Teams />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;