import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css';

const Footer = () => {
  return (  
    <div className="footer-container">
      <footer>
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
              />
            </a>
          </li>
          <li>
            <a href="mailto:lindsey.lansford@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="social-icon"
              />
            </a>
          </li>
        </ul>
        {/* <span className="footer-name">&copy; 2022 🧿 Software Developer</span> */}
    </footer> 
    </div>
  );
}

export default Footer;