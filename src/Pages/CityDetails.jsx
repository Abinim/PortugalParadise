import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
// import EditPlaces from '../components/EditPlaces';

const API_URL = 'https://testingprojects.adaptable.app/places';

function CityDetails() {
  const [places, setPlaces] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const { cityName } = useParams();

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

  const filteredPlaces = selectedCity
    ? places.filter(
        place => place.city.toLowerCase() === selectedCity.toLowerCase()
      )
    : places;

  return (
    <div id='placedetails'>
      {selectedCity && <h1>{selectedCity}</h1>}

      {filteredPlaces.map(place => (
        <div key={place.id} className='place-details'>
          <h3>{place.name}</h3>
          <img src={place.image} alt={place.name} />
          <p>{place.description}</p>
          <h3>Type: {place.type}</h3>
          <h4>{place.location}</h4>
          <Link to={`/edit-places/${place.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CityDetails;
