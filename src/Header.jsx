import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [closeClick, setClose] = useState(false);

  const closeCall = () => {
    setClose(true);
    setMenu(false); // Close menu when link clicked
  };

  const menuClick = () => {
    setMenu(true);
    setClose(false); // Open menu when link clicked
  };

  return (
    <div className='mainheader'>
      <div className='positionfixed'>
        <img src='./cdlogo.png' alt='logo' className='cdlogo' />
        <div>
          <FontAwesomeIcon
            className={"menubar"}
            icon={faBars}
            onClick={menuClick}
          />
          <div className={closeClick ? 'showburger' : ''}>
            <ul className={`showmenu ${menu ? 'menuitem' : ''}`}>
              <FontAwesomeIcon icon={faTimes} onClick={closeCall} className={` showclose ${menu ? 'close' : ''}`} />
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/skills'>Skills</Link>
              </li>
              <li>
                <Link to='/education'>Education</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/education'>Education</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
