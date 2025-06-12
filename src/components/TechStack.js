import React from 'react';
import styles from './TechStack.module.css';
import Image from 'next/image';

const technologies = [
  { name: 'HTML', src: '/tech/html5.svg'},
  { name: 'CSS', src: '/tech/css.svg'},
  { name: 'JavaScript', src: '/tech/javascript.svg'},
  { name: 'React', src: '/tech/react.svg'},
  { name: 'Next.js', src: '/tech/nextdotjs.svg'},
  { name: 'Python', src: '/tech/python.svg'},
  { name: 'C', src: '/tech/c.svg'},
  { name: 'Java', src: '/tech/java.svg'},
  { name: 'Git', src: '/tech/git.svg'},
  { name: 'GitHub', src: '/tech/github.svg'},
];

export default function TechStack() {
  return (
    <section className={styles.techStackSection}>
      <h2 className={styles.techStackTitle}>Tech Stack</h2>
      <div className={styles.techGrid}>
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={styles.techItem}
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={40}
              height={40}
              className={styles.techIcon}
            />
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
