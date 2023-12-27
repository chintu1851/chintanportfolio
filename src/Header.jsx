import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div className='mainheader'>
      <div>
        <img src='./cdlogo.png' alt='logo' className='cdlogo' />
      </div>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/skills'>Skills</a>
        <a href='/education'>Education</a>
        <a href='/projects'>Projects</a>
        <a href='/contact'>Contact</a>
      </div>
    </div>
  );
};

export default Header;
