import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume-page-container">
      <h1 className="title">Resume</h1>
      <div className="card text-center">
        <div className="card-header text-muted">{/* Download my Resume */}</div>
        <div className="card-body">
          <h5 className="card-title">Let's Create Together!</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            href="https://docs.google.com/document/d/1gW3SE4o8T2k_OThO1Sr9AClvUblDHVoS/edit?usp=sharing&ouid=105632238560035934063&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Download Here
          </a>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
};

export default Resume;
