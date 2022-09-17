import { Link, Navigate } from "react-router-dom";
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

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <div className="links">
        <Link exact="true" className="homepage" to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
        {/* <Link className="about-page" to="/about"> About
          <FontAwesomeIcon icon={faCircleUser} color="white"/>
        </Link> */}
        <Link className="portfolio-page" to="/portfolio">Portfolio <FontAwesomeIcon icon={faFolderOpen}/>
        </Link>
        <Link className="resume-page" to="/resume">Resume <FontAwesomeIcon icon={faFolderOpen}/>
        </Link>
        <Link className="contact-page" to="/contact">Contact <FontAwesomeIcon icon={faAddressCard}/>
        </Link>
        {/* <ul>
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
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;

