import './Navbar.css'

/*The <ul> element is for grouping a collection of items that do not have a numerical ordering, 
and their order in the list is meaningless. Typically, unordered-list items are displayed with 
a bullet, which can be of several forms, like a dot, a circle, or a square. The bullet style is 
not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
*/



const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Abdi Vicenciodelmoral</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#profile">Profile</a></li>
            </ul>
        </nav>
    )
    
}


export default Navbar;