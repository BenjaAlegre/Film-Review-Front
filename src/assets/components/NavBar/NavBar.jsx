import { useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const userData = JSON.parse(sessionStorage.getItem('user'));
  const isLogged = userData?.isLogged;

  const handleClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('')
    };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Peliculas</div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
      <div className="navbar-item" onClick={() => handleClick('/')}>Home</div>
      <div className="navbar-item" onClick={() => handleClick('/filmList')}>Film List</div>

        {isLogged ? (
          <>
            <div className="navbar-item" onClick={() => handleClick('/profile')}>Profile</div>
            <div className="navbar-item" onClick={handleLogout}>Logout</div>
          </>
        ) : (
          <>
            <div className="navbar-item" onClick={() => handleClick('/login')}>Sign In</div>
            <div className="navbar-item" onClick={() => handleClick('/register')}>Register</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
