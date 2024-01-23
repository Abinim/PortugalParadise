// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './CityDetails.css';

const API_URL = 'https://testingprojects.adaptable.app/places';

function CityDetails() {
  const [places, setPlaces] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const { cityName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(API_URL);
        const placesData = response.data;
        setPlaces(placesData);

        // Set the selected city based on the route parameter
        setSelectedCity(cityName);
      } catch (error) {
        console.error('Error fetching places:', error.message);
      }
    };

    fetchPlaces();
  }, [cityName]);

  return (
    <div id='placedetails'>
      {places
        .filter(place =>
          selectedCity
            ? place.city.toLowerCase() === selectedCity.toLowerCase()
            : true
        )
        .map(place => (
          <div key={place.id} className='place-details'>
            <h3>{place.name}</h3>
            <div className='image-container'>
              <img src={place.image} alt={place.name} />
            </div>
            <p>{place.description}</p>
            <h4>{place.type}</h4>
            <h5>{place.location}</h5>
            <Link to={`/edit-places/${place.id}`}>
              <button className='edit-button'>Edit</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default CityDetails;
