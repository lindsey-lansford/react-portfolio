import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faCircleUser,
  faEnvelope,
  faFolderOpen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // const [navVisible, setNavVisible] = useState(false);

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <div className="links">
        <Link exact="true" className="homepage" to="/">
          Home
          {/* onClick={() => setNavVisible(false)} */}
          {/* // activeclassname="active" */}
          <FontAwesomeIcon icon={faHouse} color="white" />
        </Link>
        <Link className="portfolio-page" to="/portfolio">
          Portfolio
          {/* onClick={() => setNavVisible(false)}
        activeclassname="active" */}
          <FontAwesomeIcon icon={faFolderOpen} color="white" />
        </Link>
        <Link className="resume-page" to="/resume">
          Resume
          {/* onClick={() => setNavVisible(false)}
        activeclassname="active" */}
          <FontAwesomeIcon icon={faFolderOpen} color="white" />
        </Link>
        <Link className="contact-page" to="/contact">
          Contact
          {/* onClick={() => setNavVisible(false)}
        activeclassname="active" */}
          <FontAwesomeIcon icon={faAddressCard} color="white" />
        </Link>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lindsey-lansford/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="social-icon"
                color="white"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lindsey-lansford"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="social-icon"
                color="white"
              />
            </a>
          </li>
          <li>
            <a href="mailto:lindsey.lansford@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="social-icon"
                color="white"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
//     <Link
//       onClick={() => setNavVisible(false)}
//       className="about-page"
//       activeclassname="active"
//       to="/about">
// <FontAwesomeIcon icon={faCircleUser} color="white"/>
//     </Link>
