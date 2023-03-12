import {jello, tada, hinge, rubberBand, wobble} from "react-animations";
import styled, {keyframes} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css';


const Tada = styled.div`
  animation: 2s ${keyframes `${tada}`} infinite`;
// const rotate = keyframes`
// from {
//   transform: rotate(0deg);
// }
// to {
//   transform: rotate(360deg);
// }
// `;

// const Rotate = styled.div`
//   animation: ${rotate} 2s linear;
// `;

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer-container">
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/lindsey-lansford/"
              target="_blank"
              rel="noreferrer">
              <Tada>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="social-icon"
                />
              </Tada>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lindsey-lansford"
              target="_blank"
              rel="noopener noreferrer">
              <Tada>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social-icon"
                />
              </Tada>
            </a>
          </li>
          <li>
            <a
              href="mailto:lindsey.lansford@gmail.com">
              <Tada>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="social-icon"
                />
              </Tada>
            </a>
          </li>
        </ul>
        <span className="footer-name">&copy; {year} 🧿Lindsey Lansford | Software Developer</span>
      </footer>
    </div>
  );
};

export default Footer;

