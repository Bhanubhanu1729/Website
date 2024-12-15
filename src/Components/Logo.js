import React from 'react';
import './Logo.css';
import logo from '../assests/logo1.png';
import Hoodie1 from '../assests/Hoodies_1.png';
import Hoodie2 from '../assests/Hoodies_2.png';
import Hoodie3 from '../assests/Hoodies_3.png';

const Logo = () => {
  return (
    <div>
      <div className='Rotating'>
      <img src={logo} alt='Rotating Logo' className='rotating-logo'/>
      </div>
      <div className='list'>
        <img src={Hoodie1} alt='Show' className='img1'/>
        <img src={Hoodie2} alt='Show' className='img2'/>
        <img src={Hoodie3} alt='Show' className='img3'/>
      </div>
    </div>
  )
}

export default Logo;
