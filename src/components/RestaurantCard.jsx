import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

function RestaurantCard(props) {
  const { img, name, description } = props.restaurant;
  return (
    <div className='restaurant-card'>
      <img src={img} alt={name} />
      <h2>{description}</h2>
    </div>
  );
}
export default RestaurantCard;
