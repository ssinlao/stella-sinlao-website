import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const tabs = [
  { name: 'Home', icon: '/icons/home-icon.png' },
  { name: 'About', icon: '/icons/about-icon.png' },
  { name: 'Projects', icon: '/icons/projects-icon.png' },
  { name: 'Contact', icon: '/icons/contact-icon.png' },
];

export default function Navbar({ onTabClick }) {
  const [position, setPosition] = useState('offscreen');

  const flipSoundRef = useRef(null);
  const clickSoundRef = useRef(null);

  useEffect(() => {
    flipSoundRef.current = new Audio('/sounds/flip-sound.mp3');
    clickSoundRef.current = new Audio('/sounds/click.mp3');
    const timer = setTimeout(() => setPosition('center'), 100);
    return () => clearTimeout(timer);
  }, []);

  function playFlipSound() {
    if (flipSoundRef.current) {
      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.play().catch((e) => console.log('Flip sound blocked:', e));
    }
  }

  function playClickSound() {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch((e) => console.log('Click sound blocked:', e));
    }
  }

  function handleTabClick(tabName) {
    playClickSound();
    setPosition('left');
    onTabClick(tabName);
  }

  return (
    <div className={`${styles.navbarWrapper} ${styles[position]}`}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.navbarHeading}>navigation</h2>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {tabs.map((tab) => (
            <li key={tab.name} className={styles.navItem}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.name);
                }}
                className={styles.iconLink}
              >
                <img
                  src={tab.icon}
                  alt={tab.name}
                  className={styles.icon}
                  onMouseEnter={playFlipSound}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
