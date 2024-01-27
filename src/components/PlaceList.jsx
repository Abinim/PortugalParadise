import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlacesList = ({ onDelete }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          'https://testingprojects.adaptable.app/places'
        );
        const placesData = response.data;
        setPlaces(placesData);
      } catch (error) {
        console.error('Error fetching places:', error.message);
      }
    };

    fetchPlaces();
  }, []);

  const handleDelete = async id => {
    try {
      await axios.delete(`https://testingprojects.adaptable.app/places/${id}`);
      console.log('Place deleted:', id);
      setPlaces(prevPlaces => prevPlaces.filter(place => place.id !== id));
    } catch (error) {
      console.error('Error deleting place:', error.message);
    }
  };

  return (
    <div className='PlacesList'>
      <h4>Places List</h4>
      <ul>
        {places.map(place => (
          <li key={place.id}>
            {place.name}
            <button onClick={() => handleDelete(place.id)}>Delete</button>
            <Link to={`/edit-places/${place.id}`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesList;
