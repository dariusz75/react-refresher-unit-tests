import logo from '../assets/logo.svg';

const Header = () => {
    return (
      <header data-testid="component-wrapper">
          <div className="logo">
              <img src={logo} alt="Logo" />
              <span data-testid="title">Task List</span>
          </div>
          <div className="themeSelector">
              <span className="light" data-testid="theme-selector"></span>
              <span className="medium" data-testid="theme-selector"></span>
              <span className="dark activeTheme" data-testid="theme-selector"></span>
              <span className="gOne" data-testid="theme-selector"></span>
              <span className="gTwo" data-testid="theme-selector"></span>
              <span className="gThree" data-testid="theme-selector"></span>
          </div>
      </header>
    );
};

export default Header;