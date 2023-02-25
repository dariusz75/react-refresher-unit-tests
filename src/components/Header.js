import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light');

  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

    return (
      <header data-testid="component-wrapper">
          <div className="logo">
              <img src={logo} alt="Logo" />
              <span data-testid="title">Task List</span>
          </div>
          <div className="themeSelector">
              <span
                className={theme === 'light' ? 'light activeTheme' : 'light'}
                data-testid="theme-selector"
                onClick={() => setTheme('light')}
              ></span>
              <span
                className={theme === 'medium' ? 'medium activeTheme' : 'medium'}
                data-testid="theme-selector"
                onClick={() => setTheme('medium')}
              ></span>
              <span
                className={theme === 'dark' ? 'dark activeTheme' : 'dark'}
                data-testid="theme-selector"
                onClick={() => setTheme('dark')}
              ></span>
          </div>
      </header>
    );
};

export default Header;