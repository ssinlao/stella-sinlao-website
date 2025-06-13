import React, { useEffect, useState, useRef } from 'react';
import styles from './BrowserWindow.module.css';

export default function BrowserWindow({ title, content, openWindow, setOpenWindow, headerColor }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const clickSoundRef = useRef(null);
  const windowRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0, dragging: false });

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

  const onMouseDown = (e) => {
    posRef.current.dragging = true;
    posRef.current.offsetX = e.clientX - (windowRef.current.offsetLeft || 0);
    posRef.current.offsetY = e.clientY - (windowRef.current.offsetTop || 0);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!posRef.current.dragging) return;

    const windowEl = windowRef.current;
    const windowWidth = windowEl.offsetWidth;
    const windowHeight = windowEl.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let left = e.clientX - posRef.current.offsetX;
    let top = e.clientY - posRef.current.offsetY;
    left = Math.max(0, Math.min(left, viewportWidth - windowWidth));
    top = Math.max(0, Math.min(top, viewportHeight - windowHeight));
    windowEl.style.left = `${left}px`;
    windowEl.style.top = `${top}px`;
    windowEl.style.position = 'absolute';
    windowEl.style.margin = '0';
  };

  const onMouseUp = () => {
    posRef.current.dragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  if (!visible) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeWindow} />
      <div
        ref={windowRef}
        className={`${styles.browserWindow} ${open ? styles.open : ''}`}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        <div
          className={styles.browserHeader}
          style={{ backgroundColor: headerColor, color: 'white', cursor: 'grab' }}
          onMouseDown={onMouseDown}
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
