import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css';
// import { Popover, Typography, Link, Icon } from "@mui/material";

// import { LinkedInIcon, GitHubIcon, EmailIcon } from "@mui/icons-material"


const Footer = () => {
    return (  
    <div className="footer-container">
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/lindsey-lansford/"
              target="_blank"
              rel="noreferrer">
              
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
              rel="noopener noreferrer"
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
        {/* <span className="footer-name">&copy; 2022 🧿Lindsey Lansford | Software Developer</span> */}
    </footer> 
    </div>
  );
  
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);

  // return (
  //   <div>
  //     <Typography
  //       aria-owns={open ? 'mouse-over-popover' : undefined}
  //       aria-haspopup="true"
  //       onMouseEnter={handlePopoverOpen}
  //       onMouseLeave={handlePopoverClose}
  //     >
  //       Hover with a Popover.
  //     </Typography>
  //     <Popover
  //       id="mouse-over-popover"
  //       sx={{
  //         pointerEvents: 'none',
  //       }}
  //       open={open}
  //       anchorEl={anchorEl}
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'left',
  //       }}
  //       transformOrigin={{
  //         vertical: 'top',
  //         horizontal: 'left',
  //       }}
  //       onClose={handlePopoverClose}
  //       disableRestoreFocus
  //     >
  //       <Typography sx={{ p: 1 }}>I use Popover.</Typography>
  //     </Popover>
  //   </div>
  // );
}

export default Footer;

