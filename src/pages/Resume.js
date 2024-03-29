import "../styles/resume.css";
import Github from "../components/Github.js"
//animation
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const Spin = styled.div`
  display: inline-block;
  animation: ${spin} 1.5s 1 both normal;
  font-size: calc(1.375rem + 1.5vw);
  font-family: "Quicksand" !important;
  font-weight: 500;
  line-height: 1.2;
`;

const Resume = () => {
  const onButtonClick = () => {
    // using JavaScript method to get PDF file
    fetch("LML_Resume_WebDev_FL.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "LML_Resume_WebDev_FL.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="page-container">
      <Spin className="title">Resume</Spin>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Want To Know More About Me?</h5>
          <p className="card-text">
          Learn more about my work experience by clicking the 'Download Here' button to view my resume. I look forward to connecting with you!
          </p>
          <button className="btn btn-primary" onClick={onButtonClick}>
            Download Here
          </button>
        </div>
      </div>
      {/* {<Github/>} */}
    </div>
  );
};

export default Resume;
