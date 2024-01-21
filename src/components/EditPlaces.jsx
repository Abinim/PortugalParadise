import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://testingprojects.adaptable.app/places';

const EditPlaces = ({ placeId, onEdit }) => {
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
        const response = await axios.get(
          `http://localhost:4000/places/${placeId}`
        );
        const placeData = response.data;
        setEditedPlace(placeData);
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
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/places/${placeId}`, editedPlace);
      onEdit();
    } catch (error) {
      console.error('Error editing place:', error.message);
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
        <input
          type='text'
          name='city'
          value={editedPlace.city}
          onChange={handleInputChange}
          required
        />

        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditPlaces;
