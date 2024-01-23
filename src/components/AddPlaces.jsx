import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'https://testingprojects.adaptable.app/places';

const AddPlaces = ({ addPlace, editMode, placeId, onEdit }) => {
  const [placeData, setPlaceData] = useState({
    name: '',
    description: '',
    location: '',
    type: '',
    image: '',
    city: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setPlaceData({
      ...placeData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(
        'https://testingprojects.adaptable.app/places',
        placeData
      );

      setPlaceData({
        name: '',
        description: '',
        location: '',
        type: '',
        image: '',
        city: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className='AddPlaces'>
      <h4>{editMode ? 'Edit Place' : 'Add a Place'}</h4>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={placeData.name}
          onChange={handleInputChange}
          required
        />

        <label>Description: </label>
        <textarea
          name='description'
          value={placeData.description}
          onChange={handleInputChange}
          required
        />

        <label>Location: </label>
        <input
          type='text'
          name='location'
          value={placeData.location}
          onChange={handleInputChange}
          required
        />

        <label>Type: </label>
        <input
          type='text'
          name='type'
          value={placeData.type}
          onChange={handleInputChange}
          required
        />

        <label>Image URL: </label>
        <input
          type='url'
          name='image'
          value={placeData.image}
          onChange={handleInputChange}
          required
        />

        <label>City: </label>
        <input
          type='text'
          name='city'
          value={placeData.city}
          onChange={handleInputChange}
          required
        />

        <button type='submit'>{editMode ? 'Save Changes' : 'Add Place'}</button>
        {editMode && (
          <button type='button' onClick={onEdit}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default AddPlaces;
