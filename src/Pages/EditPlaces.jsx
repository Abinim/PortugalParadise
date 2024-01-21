import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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

  const getSinglePlace = async () => {
    try {
      const response = await axios.get(`${API_URL}/places/${placeId}`);

      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlaces = async () => {
    try {
      await axios.delete(`${API_URL}/places/${placeId}`);
      navigate('/Places');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlace();
  }, []);

  const handleEditSubmit = async e => {
    try {
      e.preventDefault();
      await axios.put(
        `https://testingprojects.adaptable.app/places/${placeId}`,
        editedPlace
      );
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
