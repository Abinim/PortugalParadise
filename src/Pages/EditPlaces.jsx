import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = 'https://testingprojects.adaptable.app/places';

const EditPlaces = ({ places, onDelete }) => {
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
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/${placeId}`, editedPlace);
      // Assuming onDelete is used to refresh the list after deletion
      onDelete(placeId);
      // Redirect to the city details page after editing
      navigate(`/popular-cities/${editedPlace.city}`);
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

        {/* Add other input fields for description, location, type, image, city, etc. */}

        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditPlaces;
