import './index.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCircleUser, faEnvelope, faFolderOpen, faHouse, } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [navVisible, setNavVisible] = useState(false);

return (
  <div className="navbar">
    <nav className={navVisible ? 'skrink-mobile': ''}>
      <NavLink
        exact="true"
        onClick={() => setNavVisible(false)}
        className="homepage"
        activeclassname="active"
        to='/'>
  <FontAwesomeIcon icon={faHouse} color="white"/>
      </NavLink>
      <NavLink
        onClick={() => setNavVisible(false)}
        className="about-page"
        activeclassname="active"
        to="/about">
  <FontAwesomeIcon icon={faCircleUser} color="white"/>
      </NavLink>
      <NavLink
        onClick={() => setNavVisible(false)}
        className="portfolio-page"
        activeclassname="active"
        to="/portfolio">
  <FontAwesomeIcon icon={faFolderOpen} color="white"/>
      </NavLink>
      <NavLink
        onClick={() => setNavVisible(false)}
        className="resume-page"
        activeclassname="active"
        to="/resume">
  <FontAwesomeIcon icon={faFolderOpen} color="white"/>
      </NavLink>
      <NavLink
        onClick={() => setNavVisible(false)}
        className="contact-page"
        activeclassname="active"
        to="/contact">
  <FontAwesomeIcon icon={faAddressCard} color="white"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/lindsey-lansford/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" color="white"/>
          </a>
      </li>
      <li>
        <a href="https://github.com/lindsey-lansford"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" color="white"/>
          </a>
      </li>
      <li>
        <a href="mailto:lindsey.lansford@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" color="white"/>
          </a>
      </li>
    </ul>
  </div>
  )
}

export default Navbar