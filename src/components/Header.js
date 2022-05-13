import React from 'react';
import backgroundImage from '../laptop-background.jpg';

const Header = () => {
  return (
    <div className='header-wraper'>
        <img
            src={backgroundImage}
            class="img-fluid"
            alt="Laptop background"
        />
        <div className='main-info'>
            <h2>Web development and website promotions</h2>
        </div>
    </div>
  )
}

export default Header;