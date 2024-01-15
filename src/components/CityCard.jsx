import React from 'react';
import { Link } from 'react-router-dom';

function CityCard(props) {
  const { img, name } = props.city;

  return (
    <div className='city-card'>
      <Link to={`/popular-cities/${name}`}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </Link>
    </div>
  );
}

export default CityCard;
