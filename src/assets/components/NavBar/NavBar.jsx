import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">BrandName</div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="navbar-item">Home</a>
        <a href="#link" className="navbar-item">Link</a>
        <div className="navbar-item dropdown">
          <div className="dropdown-toggle">Dropdown</div>
          <div className="dropdown-menu">
            <a href="#action1" className="dropdown-item">Action</a>
            <a href="#action2" className="dropdown-item">Another action</a>
            <a href="#action3" className="dropdown-item">Something</a>
            <a href="#action4" className="dropdown-item">Separated link</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
