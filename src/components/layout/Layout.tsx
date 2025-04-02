import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else if (savedDarkMode === null) {

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-container">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 