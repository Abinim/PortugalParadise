import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AboutPortugal from './Pages/AboutPortugal';
import PopularCities from './Pages/PopularCities';
import AddYourPlace from './Pages/AddYourPlace';
import CityDetails from './Pages/CityDetails';
import AddPlaces from './components/AddPlaces';
import EditPlaces from './components/EditPlaces'; 
import Footer from './components/Footer';

import './App.css';

const API_URL = 'https://testingprojects.adaptable.app/places';

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(API_URL);
        const placesData = response.data;
        setPlaces(placesData);
      } catch (error) {
        console.error('Error fetching places:', error.message);
      }
    };

    fetchPlaces();
  }, []);

  const addPlace = newPlace => {
    setPlaces(prevPlaces => [...prevPlaces, newPlace]);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPlaces(prevPlaces => prevPlaces.filter(place => place.id !== id));
    } catch (error) {
      console.error('Error deleting place:', error.message);
    }
  };

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-portugal' element={<AboutPortugal />} />
        <Route path='/popular-cities' element={<PopularCities />} />
        <Route path='/popular-cities/:cityName' element={<CityDetails />} />
        <Route path='/add-your-place' element={<AddYourPlace />} />
        <Route path='/add-places' element={<AddPlaces addPlace={addPlace} />} />

        <Route
          path='/edit-places/:placeId'
          element={<EditPlaces places={places} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
