import React from 'react';

function Footer() {
  const mapImage =
    'https://www.motosha.com/files/preview/1280x711/2096-portuguese-flag.jpg?size=large%20850w';
  const mapLink = 'https://zoom.earth/places/portugal/';

  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section map'>
          <h2>Explore Portugal on the map</h2>
          <a href={mapLink} target='_blank' rel='noopener noreferrer'>
            <img src={mapImage} alt='World Map' />
          </a>
        </div>

        <div className='footer-section contact'>
          <h2>Contact Us</h2>
          <p>Email: abinim.bibek19@.com</p>
          <p>Phone: +(351) 910527001</p>
        </div>

        <div className='footer-section social'>
          <h2>Follow Us</h2>
          <div className='social-links'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook'></i> Facebook
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i> Twitter
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        <p>
          Designed by{' '}
          <a
            href='https://your-designer-website.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            AbinimCompany
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
