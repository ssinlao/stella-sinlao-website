import React, { useEffect, useState, useRef } from 'react';
import styles from './BrowserWindow.module.css';

export default function BrowserWindow({ title, content, openWindow, setOpenWindow, headerColor }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const clickSoundRef = useRef(null);

  useEffect(() => {
    clickSoundRef.current = new Audio('/sounds/click.mp3');
  }, []);

  useEffect(() => {
    if (openWindow) {
      setVisible(true);
      setTimeout(() => setOpen(true), 10);
    } else {
      setOpen(false);
      setTimeout(() => setVisible(false), 300);
    }
  }, [openWindow]);

  function playClickSound() {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch((e) => {
        console.log('Click sound blocked:', e);
      });
    }
  }

  const closeWindow = () => setOpenWindow(false);

  if (!visible) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeWindow} />
      <div
        className={`${styles.browserWindow} ${open ? styles.open : ''}`}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        <div
          className={styles.browserHeader}
          style={{ backgroundColor: headerColor, color: 'white' }}
        >
          <span className={styles.browserTitle}>{title}</span>
          <button
            onClick={() => {
              playClickSound();
              closeWindow();
            }}
            className={styles.browserClose}
          >
            ×
          </button>
        </div>
        <div className={styles.browserContent}>{content}</div>
      </div>
    </>
  );
}
