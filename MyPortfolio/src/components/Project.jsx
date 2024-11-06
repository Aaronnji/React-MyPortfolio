import React from 'react';

function Project({ title, img, deployedLink, repoLink }) {
  return (
    <div className="project-card">
      {img ? <img src={img} alt={`${title} screenshot`} className="project-image" /> : null}
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </div>
  );
}

export default Project;