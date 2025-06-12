import React, {useEffect, useRef } from 'react';
import styles from '/src/styles/Projects.module.css';

const projects = [
  {
    name: 'Beaumont Library Contruction Project Website',
    url: 'https://mybldproject.org/',
    image: '/images/bld.png',
    description: 'A website showcasing the library\'s rennovation project and timeline.',
  },
  {
    name: 'Kodiak Painting Inc. Website',
    url: 'https://kodiak-painting.net/',
    image: '/images/kodiak.png',
    description: 'A website streamlining the flow of information about the company and their services.',
  },
  {
    name: 'Home Cafe Recipe Website',
    url: 'https://github.com/ssinlao/HomeCafeCollection',
    image: '/images/homecafe.png',
    description: 'Object oriented and full stack web development project with a filtering function and search function for beverage recipes.',
  },
  
];

export default function Projects() {
  const fwoopSoundRef = useRef(null);

  useEffect(() => {
      fwoopSoundRef.current = new Audio('/sounds/fwoop.mp3');
  }, []);

  function playFwoopSound() {
    if (fwoopSoundRef.current) {
      fwoopSoundRef.current.currentTime = 0;
      fwoopSoundRef.current.play().catch((e) => console.log('Flip sound blocked:', e));
    }
  }

  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.title}>My Projects</h1>
      <hr />
      <br></br>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img
              src={project.image}
              alt={`Preview of ${project.name}`}
              className={styles.projectImage}
              onMouseEnter={playFwoopSound}
            />
            <div className={styles.projectInfo}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
