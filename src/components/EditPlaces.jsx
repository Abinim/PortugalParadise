import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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

      const response = await axios.put(
        `https://testingprojects.adaptable.app/places/${placeId}`,
        editedPlace
      );

      // Assuming onDelete is used to refresh the list after deletion
      onDelete(placeId);

      // Redirect to the city details page after editing
      navigate(`/popular-cities/${editedPlace.city}`);

      // Log the response
      console.log('Edit response:', response.data);
    } catch (error) {
      console.error('Error editing place:', error.message);
    }
  };
  return (
    <div className='AddPlaces'>
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
