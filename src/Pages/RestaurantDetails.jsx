import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetails.css';

const API_URL = 'https://testingprojects.adaptable.app/restaurants';

function RestaurantDetails() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedlocation, setSelectedLocation] = useState(null);
  const { locationName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(API_URL);
        const restaurantsData = response.data;
        setRestaurants(restaurantsData);

        setSelectedLocation(locationName);
      } catch (error) {
        console.error('Error fetching restaurants:', error.message);
      }
    };

    fetchRestaurants();
  }, [locationName]);

  return (
    <div id='restaurant-details'>
      {restaurants
        .filter(restaurant =>
          selectedlocation
            ? restaurant.location &&
              restaurant.location.toLowerCase() ===
                selectedlocation.toLowerCase()
            : true
        )
        .map(restaurant => (
          <div
            key={`${restaurant.id}-${restaurant.location}`}
            className='restaurant-details'
          >
            <h3>{restaurant.name}</h3>
            <div className='image-container'>
              <img src={restaurant.image} alt={restaurant.name} />
            </div>
            <h4>{restaurant.type}</h4>
            <p>{restaurant.address}</p>
            <h5>{restaurant.location}</h5>
          </div>
        ))}
    </div>
  );
}

export default RestaurantDetails;
