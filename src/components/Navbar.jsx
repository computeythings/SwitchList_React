import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Navbar.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onOptionClick = (option) => {
    if (option === 'UpdateCRT') {
      console.log('UpdateCRT button clicked');
      // Assuming you have an updateSecureCRTLocal function
      // Replace this with the actual function you want to call
      // this.siteService.updateSecureCRTLocal({});
    }
    if (option === 'Settings') {
      alert('TODO: IMPLEMENT SETTINGS FUNCTION');
    }
  };

  return (
    <React.Fragment>
        <header>
            <div id="banner">
                <div className="navbar-container">
                    <div id="menu-button" onClick={toggleMenu}>
                        {<FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
                <a href="/" className="titlebar">Switch List</a>
                <DropdownButton id="options-button" 
                    title={<FontAwesomeIcon icon={faEllipsisV} />}
                    onSelect={onOptionClick} 
                >
                    <Dropdown.Item eventKey="UpdateCRT">Update SecureCRT</Dropdown.Item>
                    <Dropdown.Item eventKey="Settings">Settings</Dropdown.Item>
                </DropdownButton>
            </div>
        </header>
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        
    </React.Fragment>
  );
}

export default Navbar;
