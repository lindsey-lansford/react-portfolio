import { Link, NavLink } from "react-router-dom";
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
      
        <Link exact="true" className="homepage" to="/">
          <h1>Lindsey Lansford</h1>
        </Link>
      <div className="links">
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/about"> About
          {/* <FontAwesomeIcon icon={faCircleUser}/> */}
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="portfolio">Portfolio
          {/* <FontAwesomeIcon icon={faFolderOpen} /> */}
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/resume">Resume
          {/* <FontAwesomeIcon icon={faFolderOpen} /> */}
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/contact">Contact
          {/* <FontAwesomeIcon icon={faAddressCard} /> */}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

