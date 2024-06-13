
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import DailyQuestion from './components/DailyQuestion';

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


  const handleNavClick = (section) => {
    setActiveSection(section);
  };


  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      <section id='home' style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
        <h2>Home</h2>
        <p>Exploring the intersection of data and innovation through machine learning projects.</p>
        <div className='intro'>
          <h1>Abdi Vicenciodelmoral</h1>
          <h2>Machine Learning Enthusiast</h2>
          <div className='buttons'>
            <button onClick={() => handleNavClick('profile')}>About Me</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
          </div>
        </div>
        <DailyQuestion/>
      </section>
      <section id='profile' style={{display: activeSection === 'profile' ? 'block' : 'none'}}>
        <h2>Profile</h2>
        <p>This section showcases my skills, knowledge, and experience</p>
      </section>
      <section id='projects' style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
        <h2>Projects</h2>
        <p>This section contains a collections of projects</p>
      </section>
      <section id='research-hub' style={{ display: activeSection === 'research-hub' ? 'block' : 'none' }}>
        <h2>Research Hub</h2>
        <p>This section contains research papers, guides, and other resources related to machine learning.</p>
      </section>
      <section id='contact' style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
        <h2>Contact</h2>
        <p>This section contains contact information, email, LinkedIn Profile, etc...</p>
      </section>


    </div>
  );
}

export default App;
