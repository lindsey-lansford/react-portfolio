import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css';

const Footer = () => {
  return (  
    <div className="footerContainer">
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
        <h6> &copy; Lindsey 🧿 Lansford </h6>
    </footer> 
    </div>
  );
}

export default Footer;