import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1-Tarot Card Reader', 
      img: ' ', 
      deployedLink: 'https://esaiphillips.github.io/Daily-Listening/', 
      repoLink: 'https://github.com/EsaiPhillips/Daily-Listening'},
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;