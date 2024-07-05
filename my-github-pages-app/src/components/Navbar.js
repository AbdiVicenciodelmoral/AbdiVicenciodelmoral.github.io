import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const handleClick = (section, event) => {
    event.preventDefault();
    onNavClick(section);
  };

  return (
    <nav className="navbar">
      <h1>Abdi Vicenciodelmoral</h1>
      <ul>
        <li><a href="#home" onClick={(e) => handleClick('home', e)}>Home</a></li>
        <li><a href="#profile" onClick={(e) => handleClick('profile', e)}>Profile</a></li>
        <li><a href="#projects" onClick={(e) => handleClick('projects', e)}>Projects</a></li>
        <li><a href="#research-hub" onClick={(e) => handleClick('research-hub', e)}>Research Hub</a></li>
        {/*<li><a href="#ml-demos" onClick={(e) => handleClick('ml-demos', e)}>Interactive ML</a></li>*/}
        <li><a href="#contact" onClick={(e) => handleClick('contact', e)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;