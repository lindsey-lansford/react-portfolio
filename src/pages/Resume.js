import "../styles/resume.css";
import React from "react";

const Resume = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Lindsey_Lansford_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Lindsey_Lansford_Resume.pdf';
            alink.click();
        })
    })
}

  return (
    <div className="resume-page-container">
      <h1 className="title">Resume</h1>
      <div className="card text-center">
        <div className="card-header" id="resume-header">{/* Download my Resume */}</div>
        <div className="card-body">
          <h5 className="card-title">Want To Know More About Me?</h5>
          <p className="card-text">
            Checkout my resume by clicking the 'Download Here' button for a more indepth look into my work experience. Looking forward to chatting with you!
          </p>
          <button className="btn btn-primary" onClick={onButtonClick}>
                    Download Here
                </button>
          {/* <a
            href="https://docs.google.com/document/d/1lyi5STj3BZu0Z-mMTJG6raPViqMHxkyrLzhgkDwnG1M/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Download Here
          </a> */}
        </div>
        <div className="card-footer text-muted" id="resume-footer"></div>
      </div>
    </div>
  );
};

export default Resume;
