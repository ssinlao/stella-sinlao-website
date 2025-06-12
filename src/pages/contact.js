import React from 'react';
import styles from '/src/styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h1 className={styles.title}>Contact Me!</h1>
      <hr />
      <p className={styles.description}>
        Feel free to reach out to me on any of these platforms:
      </p>
      <div className={styles.linksContainer}>
        <a
          href="https://github.com/ssinlao"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/stella-sinlao"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          LinkedIn
        </a>
        <a href="mailto:sinlaos.403@gmail.com" className={styles.contactLink}>
          Email
        </a>
      </div>
    </section>
  );
}
