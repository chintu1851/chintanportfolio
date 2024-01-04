import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menu, setmenu] = useState(false);
  const [closeclick, setClose] = useState(false);

  const closecall = () => {
    setClose(true)
  }
  const menuclick = () => {
    setmenu(true)
    setClose(false)
  }

  return (
    <div className='mainheader'>
      <div className='positionfixed'>
        <img src='./cdlogo.png' alt='logo' className='cdlogo' />
        <div >
          <FontAwesomeIcon
            className={"menubar"}
            icon={faBars}
            onClick={menuclick}
          />
          <div className={closeclick ? 'showburger' : ''}>
            <ul className={`showmenu ${menu ? 'menuitem' : ''}`}>
              <FontAwesomeIcon icon={faXmark} onClick={closecall} className={` showclose ${menu ? 'close' : ''}`} />
              <a href='/'>Home</a>
              <a href='/about'>About</a>
              <a href='/skills'>Skills</a>
              <a href='/education'>Education</a>
              <a href='/projects'>Projects</a>
              <a href='/contact'>Contact</a>

            </ul>
          </div>
        </div>

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
