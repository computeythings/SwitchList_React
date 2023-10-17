import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css'; // Import your CSS for styling
//import SiteModal from './SiteModal'; // Assuming you have a SiteModal component

function Sidebar({ isMenuOpen, toggleMenu }) {
  const [sites, setSites] = useState([]);
  const [sitesExpanded, setSitesExpanded] = useState([]);
  const [focusCategory, setFocusCategory] = useState('');
  const [siteSubscription, setSiteSubscription] = useState(null);
  const [active, setActive] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Simulating an asynchronous data fetching operation
    const fetchData = async () => {
      // Replace this with the actual data fetching logic using an API call or other data source
      const response = await fetch('/api/sites');
      const data = await response.json();
      setSites(data);
    };

    //TODO: fetch properly
    //fetchData();

    // Simulating the behavior of ngOnDestroy in Angular
    return () => {
      if (siteSubscription) {
        siteSubscription.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event) => {
      // Check if the click event target is not inside the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && active) {
        // Close the sidebar
        toggleMenu();
      }
    };

    // Attach the event listener when the component mounts
    if (isMenuOpen) {
      document.addEventListener('click', closeSidebarOnOutsideClick);
      setActive(true);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', closeSidebarOnOutsideClick);
      setActive(false);
    };
  }, [isMenuOpen, toggleMenu, active]);


  const openSiteModal = () => {
    // Replace this with your modal logic
    // Open the SiteModal component
  };

  const siteExpandToggle = (siteIndex) => {
    if (sitesExpanded.includes(siteIndex)) {
      setSitesExpanded(sitesExpanded.filter((index) => index !== siteIndex));
    } else {
      setSitesExpanded([...sitesExpanded, siteIndex]);
    }
  };

  const isSiteExpanded = (siteIndex) => sitesExpanded.includes(siteIndex);

  const menuSelect = (category) => {
    if (focusCategory === category) {
      setFocusCategory('');
    } else {
      setFocusCategory(category);
    }

    if (category !== 'Sites') {
      alert('This page has not yet been implemented.');
      menuToggle();
    }
  };

  const menuToggle = () => {
    toggleMenu();
  };

  return (
    <aside id="side-menu" className={isMenuOpen ? 'open' : ''} ref={sidebarRef}>
      <div className="nav-location">
        <span onClick={() => menuSelect('Sites')}>Sites</span>
        <i
          className="fa fa-solid fa-pencil"
          onClick={openSiteModal}
          style={{ display: focusCategory === 'Sites' ? 'block' : 'none' }}
        ></i>
        <ul className={focusCategory === 'Sites' ? 'expanded' : 'collapsed'}>
          {sites.map((site, i) => (
            <li
              key={i}
              className={`site-subnet-header ${isSiteExpanded(i) ? 'expanded' : 'collapsed'}`}
              onClick={() => siteExpandToggle(i)}
            >
              {site.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-location">
        <span onClick={() => menuSelect('Security')}>Security</span>
      </div>
      <div className="nav-location">
        <span onClick={() => menuSelect('Jobs')}>Jobs</span>
      </div>
    </aside>
  );
}

export default Sidebar;
