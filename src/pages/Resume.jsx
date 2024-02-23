import React from "react";
import PDF from "../assets/my.resume.pdf";
function Resume() {
  const handledownload = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        // open(fileURL, '_blank')  //alternative to the a link opens embedded adobe viewer
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <section className="resume-section">
      <div className="center">
        <h1 className="page-header">My Resume</h1>
      </div>
      <div className="bottom-spacing">
        <a onClick={handledownload}>
          <h4>Download my Resume</h4>
        </a>
      </div>
      <div>
        <div className="proficiency-section">
          <h5>Front-end Expertise</h5>
          <ol>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ol>
        </div>

        <div className="proficiency-section">
          <h5>Back-End Expertise</h5>
          <ol>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Model View Controller</li>
          </ol>
        </div>

        <div className="proficiency-section">
          <h5>Competencies with Development Tools</h5>
          <ol>
            <li>Git</li>
            <li>npm</li>
            <li>Webpack</li>
          </ol>
        </div>

        <div className="proficiency-section">
          <h5>Proficiencies with Systems</h5>
          <ol>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Resume;
