import React from 'react';
import { Link } from 'react-router-dom';
import CityCard from '../components/CityCard';
import CityDetails from './CityDetails';

const cities = [
  {
    name: 'Lisbon',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Lisbon_%2837019885565%29.jpg',
  },
  {
    name: 'Porto',
    img: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2019/09/14101303/Ponte-in-Porto.jpg',
  },
  {
    name: 'Madeira',
    img: 'https://images.impresa.pt/sicnot/2023-03-02-Funchal.jpg-d01e9a4c/original',
  },
  {
    name: 'Coimbra',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coimbra_University.jpg/1599px-Coimbra_University.jpg',
  },
  {
    name: 'Cascais',
    img: 'https://media-manager.noticiasaominuto.com/1920/naom_64ae775acf152.jpg',
  },
  {
    name: 'Santarem',
    img: 'https://static.wixstatic.com/media/c96a9d_6b363e28a1024eb6a77141b412980408~mv2.jpg/v1/fill/w_2880,h_1150,fp_0.50_0.50,q_90,usm_1.20_1.00_0.01,enc_auto/c96a9d_6b363e28a1024eb6a77141b412980408~mv2.jpg',
  },
  {
    name: 'Sintra',
    img: 'https://acrossportugal.com/upload/Sintra-Palacio-da-Pena_1168465315-Istock-XXG_29012021093726.jpg',
  },
  {
    name: 'Faro',
    img: 'https://img.marinas.com/v2/8ed0e29c7ba7ee2128e6999ab39cd82bd6416a984be77762ca5a7484ff42d124.jpg',
  },
  {
    name: 'Guimaraes',
    img: 'https://rossiwrites.com/wp-content/uploads/2022/04/The-medieval-castle-Guimaraes-Portugal-rossiwrites.com-3.jpg.webp',
  },
  {
    name: 'Braga',
    img: 'https://rossiwrites.com/wp-content/uploads/2022/06/The-view-from-the-bell-tower-of-the-Sanctuary-of-Bom-Jesus-do-Monte-Braga-Portugal-rossiwrites.com_.jpg.webp',
  },
];

function PopularCities() {
  return (
    <div id='cities'>
      {cities.map(city => (
        <Link to={`/popular-cities/${city.name}`}>
          <CityCard city={city} />
        </Link>
      ))}
    </div>
  );
}

export default PopularCities;
