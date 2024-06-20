
import React from 'react';
import './Navbar.css'

/*The <ul> element is for grouping a collection of items that do not have a numerical ordering, 
and their order in the list is meaningless. Typically, unordered-list items are displayed with 
a bullet, which can be of several forms, like a dot, a circle, or a square. The bullet style is 
not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
*/



const Navbar = ({onNavClick}) => {
    const handleClick = (section, event) =>{
        event.preventDefault();
        onNavClick(section);

    }
    return(
        <nav className="navbar">
            <h1>Abdi Vicenciodelmoral</h1>
            <ul>
            <li><a href="#home" onClick={(e) => handleClick('home', e)}>Home</a></li>
            <li><a href="#profile" onClick={(e) => handleClick('profile', e)}>Profile</a></li>
            <li><a href="#projects" onClick={(e) => handleClick('projects', e)}>Projects</a></li>
            <li><a href="#research-hub" onClick={(e) => handleClick('research-hub', e)}>Research Hub</a></li>
            <li><a href="#contact" onClick={(e) => handleClick('contact', e)}>Contact</a></li>

            </ul>
        </nav>
    )
    
}


export default Navbar;