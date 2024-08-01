import { useContext, useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../../App';

const NavBar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

  const handleClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setCurrentUser({
      isLogged: false
    })
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

        {sessionStorage.getItem('isLogged') ? (
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
