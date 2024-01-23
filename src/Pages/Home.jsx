import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    timeStyle: 'medium',
    hour12: false,
    timeZone: 'Europe/Lisbon',
  });

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='home-container'>
      <header className='home-header'>
        <h1 className='home-title'>Welcome to Portugal</h1>
      </header>

      <section className='home-section'>
        <h2 className='home-section-title'>Explore Popular Cities</h2>
        <p className='home-section-text'>
          Discover the charm of Portugal's most beautiful cities.
        </p>
        <Link to='/popular-cities'>
          <button className='home-button'>Explore Cities</button>
        </Link>
      </section>

      <section className='home-section'>
        <h2 className='home-section-title'>About Portugal</h2>
        <p className='home-section-text'>
          Learn about the rich history, vibrant culture, and stunning landscapes
          that make Portugal a unique destination.
        </p>
        <Link to='/about-portugal'>
          <button className='home-button'>About Portugal</button>
        </Link>
      </section>

      <section className='home-section'>
        <h2 className='home-section-title'>Current Time in Portugal</h2>
        <p className='home-section-text current-time'>{formattedTime}</p>
        <p className='current-date'>{formattedDate}</p>
      </section>
    </div>
  );
}

export default Home;
