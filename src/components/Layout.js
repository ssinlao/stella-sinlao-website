import React, { useState } from 'react';
import Navbar from './Navbar';
import BrowserWindow from './BrowserWindow';
import Home from '/src/pages/home.js';
import About from '/src/pages/about.js';
import Projects from '/src/pages/projects.js';
import Contact from '/src/pages/contact.js';

export default function Layout({ children }) {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const tabColors = {
    Home: '#CBDEA6',
    About: '#7E95B6',
    Projects: '#F5E298',
    Contact: '#F1F0EB',
  };


  const handleTabClick = (tabName) => {
    setShowHome(false);
    setShowAbout(false);
    setShowProjects(false);
    setShowContact(false);

    switch (tabName) {
      case 'Home':
        setShowHome(true);
        break;
      case 'About':
        setShowAbout(true);
        break;
      case 'Projects':
        setShowProjects(true);
        break;
      case 'Contact':
        setShowContact(true);
        break;
    }
  };

  return (
    <>
      <Navbar onTabClick={handleTabClick} />
      <main className="mainContent">{children}</main>
      <BrowserWindow
        title="HOME"
        content={<Home />}
        openWindow={showHome}
        setOpenWindow={setShowHome}
        headerColor={tabColors.Home}
      />
      <BrowserWindow
        title="ABOUT"
        content={<About />}
        openWindow={showAbout}
        setOpenWindow={setShowAbout}
        headerColor={tabColors.About}
      />
      <BrowserWindow
        title="PROJECTS"
        content={<Projects />}
        openWindow={showProjects}
        setOpenWindow={setShowProjects}
        headerColor={tabColors.Projects}
      />
      <BrowserWindow
        title="CONTACT"
        content={<Contact />}
        openWindow={showContact}
        setOpenWindow={setShowContact}
        headerColor={tabColors.Contact}
      />
    </>
  );
}
