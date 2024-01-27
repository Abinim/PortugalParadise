import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPlaces.css';
const cities = [
  'Lisbon',
  'Porto',
  'Madeira',
  'Coimbra',
  'Cascais',
  'Santarem',
  'sintra',
  'Faro',
  'Guimaraes',
  'Baraga',
];

const API_URL = 'https://testingprojects.adaptable.app/places';

const EditPlaces = ({ onDelete }) => {
  const { placeId } = useParams();
  const navigate = useNavigate();

  const [editedPlace, setEditedPlace] = useState({
    name: '',
    description: '',
    location: '',
    type: '',
    image: '',
    city: '',
  });

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`${API_URL}/${placeId}`);
        setEditedPlace(response.data);
      } catch (error) {
        console.error('Error fetching place details:', error.message);
      }
    };

    fetchPlace();
  }, [placeId]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedPlace({
      ...editedPlace,
      [name]: value,
    });
  };

  const handleEditSubmit = async e => {
    try {
      e.preventDefault();
      await axios.put(
        `https://testingprojects.adaptable.app/places/${placeId}`,
        editedPlace
      );

      if (onDelete) {
        onDelete(placeId);
      }

      navigate(`/popular-cities/${editedPlace.city}`);
    } catch (error) {
      console.error('Error editing place:', error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://testingprojects.adaptable.app/places/${placeId}`
      );

      if (onDelete) {
        onDelete(placeId);
      }

      navigate('/popular-cities');
    } catch (error) {
      console.error('Error deleting place:', error.message);
    }
  };

  return (
    <div className='EditPlaces'>
      <h4>Edit Place</h4>

      <form onSubmit={handleEditSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={editedPlace.name}
          onChange={handleInputChange}
          required
        />

        <label>Description: </label>
        <textarea
          name='description'
          value={editedPlace.description}
          onChange={handleInputChange}
          required
        />

        <label>Location: </label>
        <input
          type='text'
          name='location'
          value={editedPlace.location}
          onChange={handleInputChange}
          required
        />

        <label>Type: </label>
        <input
          type='text'
          name='type'
          value={editedPlace.type}
          onChange={handleInputChange}
          required
        />

        <label>Image URL: </label>
        <input
          type='url'
          name='image'
          value={editedPlace.image}
          onChange={handleInputChange}
          required
        />

        <label>City: </label>
        <select
          name='city'
          id='city'
          onChange={handleInputChange}
          value={editedPlace.city}
          required
        >
          {cities.map(city => {
            return <option value={city}> {city} </option>;
          })}
        </select>

        <button type='submit'>Save Changes</button>
      </form>

      <button onClick={handleDelete}>Delete Place</button>
    </div>
  );
};

export default EditPlaces;
