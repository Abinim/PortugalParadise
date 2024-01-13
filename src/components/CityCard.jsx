import React from 'react';
import { Link } from 'react-router-dom';

function CityCard(props) {
  console.log(props.cityInfo);
  return (
    <div id='location'>
      <img src={props.city.img} />
      <h2>{props.city.name}</h2>
    </div>
  );
}

export default CityCard;
