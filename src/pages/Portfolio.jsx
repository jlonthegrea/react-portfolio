import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
      {
        name: 'Note Taker',
        description: 'HTML/JS/CSS',
        link: 'https://fierce-eyrie-23256-871d02cb655a.herokuapp.com/',
        repo: 'https://github.com/jlonthegrea/MY_NOTE-TAKER11',
        image: 'notetaker',
      },
      {
        name: 'Weather Dashboard',
        description: 'Weather Dashboard API',
        link: 'https://jlonthegrea.github.io/Worldwide-Weather-Dash6/',
        repo: 'https://github.com/jlonthegrea/Worldwide-Weather-Dash6',
        image: 'weatherdashboard',
      },
      {
        name: 'Text-editor',
        description: 'JS',
        link: 'https://enigmatic-anchorage-52034-687f3412666f.herokuapp.com/',
        repo: 'textehttps://github.com/jlonthegrea/pwa_Text-Editor19ditor',
        image: 'texteditor',
      },
    ];
  
    return (
      <div className="portfolio-container">
        <div className="d-flex justify-content-center">
          {projects.map((project) => (
            <Project project={project} key={`project-${project.name}`} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Portfolio;