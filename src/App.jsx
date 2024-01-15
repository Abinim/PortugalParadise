import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AboutPortugal from './Pages/AboutPortugal';
import PopularCities from './Pages/PopularCities';
import CityDetails from './Pages/CityDetails';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-portugal' element={<AboutPortugal />} />
        <Route path='/popular-cities' element={<PopularCities />} />
        <Route path='/popular-cities/:cityName' element={<CityDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
