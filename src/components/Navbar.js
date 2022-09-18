import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCircleUser,
  faFolderOpen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <div className="links">
        {/* <Link exact="true" className="homepage" to="/">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link> */}
        <Link className="about-page" to="/about"> About
          <FontAwesomeIcon icon={faCircleUser}/>
        </Link>
        <Link className="portfolio-page" to="/portfolio">Portfolio<FontAwesomeIcon icon={faFolderOpen}/>
        </Link>
        <Link className="resume-page" to="/resume">Resume<FontAwesomeIcon icon={faFolderOpen}/>
        </Link>
        <Link className="contact-page" to="/contact">Contact<FontAwesomeIcon icon={faAddressCard}/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

