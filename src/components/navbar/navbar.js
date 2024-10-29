import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.png';
import email from '../../images/email.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Function to navigate to Home, then scroll to About
  const goToHomeThenScrollToAbout = () => {
    navigate('/'); // Navigate to Home first
    setTimeout(() => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth', offsetTop: 50 });
    }, 500); // Timeout to wait for the home page to load before scrolling
  };

  return (
    <nav className="navbar">
      <RouterLink to="/" smooth={true} duration={1000} >
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>
      <div className="desktopMenu">
        <RouterLink className="navLink" to="/" smooth={true} duration={1000}>Home</RouterLink>
        <div className="navLink" onClick={goToHomeThenScrollToAbout}>About</div>
        <RouterLink className="navLink" to="/portfolio">Portfolio</RouterLink>
        <RouterLink className="navLink" to="/cool" smooth={true} duration={1000}>Cool</RouterLink>
      </div>

      <button className="contactMe" onClick={() => {
        document.getElementById("contactPage").scrollIntoView({ behavior: "smooth" });
      }}>
        <img src={email} alt="Contact" className="contactImg" />Contact Me
      </button>

      {/* Burger menu for mobile */}
      <FontAwesomeIcon icon={faBars} className="burgerMenu" onClick={() => setShowMenu(!showMenu)} />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <RouterLink className="listLink" to="/" smooth={true} duration={1000} onClick={() => setShowMenu(false)}>Home</RouterLink>
        <div className="listLink" onClick={goToHomeThenScrollToAbout}>About</div>
        <RouterLink className="listLink" to="/portfolio" onClick={() => setShowMenu(false)}>Portfolio</RouterLink>
        <RouterLink className="listLink" to="cool" smooth={true} duration={1000} onClick={() => setShowMenu(false)}>Cool</RouterLink>
        <ScrollLink className="listLink" to="contact" smooth={true} duration={1000} onClick={() => setShowMenu(false)}>Contact</ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
