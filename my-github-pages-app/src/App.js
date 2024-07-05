
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import Profile from './components/Profile';
import Projects from './components/Projects';
import ResearchHub from './components/ResearchHub';
//import MLDemos from './components/ML_Demos';
import Contacts from './components/contact';
import './App.css';



function App(){

  /*useState is a Hook in React that allows you to add state to functional components. 
  It returns an array with two elements: the current state value and a function that 
  can be used to update this state.
  
  activeSection: This is the state variable. It holds the current value of the state, 
  which in this case is 'home' initially.
  
  setActiveSection: This is the function that you use to update the value of activeSection. 
  When you call this function and pass it a new value, React will re-render the component with 
  the new state value.
  
  useState('home'): This initializes the state. The argument passed to useState (in this case 'home') 
  is the initial value of the state variable activeSection.
*/
  const [activeSection, setActiveSection] = useState('home');
  //const [selectedDemo, setSelectedDemo] = useState(null); // Add this line to define selectedDemo and setSelectedDemo


  const handleNavClick = (section) => {
    setActiveSection(section);
    /*if (section !== 'ml-demos') {
      setSelectedDemo(null); // Reset selected demo when navigating to a new section
    }*/
  };


  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      <div className='content'>
      <Home handleNavClick={handleNavClick} activeSection={activeSection} /> {/* Use Home component */}
      <Profile handleNavClick={handleNavClick} activeSection={activeSection} /> {/* Use Profile component */}
      <Projects handleNavClick={handleNavClick} activeSection={activeSection}/> {/* Use Projects component */}
      <ResearchHub handleNavClick={handleNavClick} activeSection={activeSection}/> {/* Use ResearchHub component */}
      {/*<MLDemos handleNavClick={handleNavClick} activeSection={activeSection} selectedDemo={selectedDemo} setSelectedDemo={setSelectedDemo}/>*/} {/* Use ML-Demos component */}
      <Contacts handleNavClick={handleNavClick} activeSection={activeSection}/> {/* Use Contacts component */}
      </div>
      <div className='footer'>
            <p>@ 2024 Abdi Vicenciodelmoral</p>
      </div>
    </div>
  );
}

export default App;
