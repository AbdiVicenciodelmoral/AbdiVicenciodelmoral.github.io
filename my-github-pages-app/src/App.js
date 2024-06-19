
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
        <div className={activeSection === 'home' ? 'intro-background' : ''}>
        <h2>Home</h2>
        <p>Exploring the intersection of data and innovation through machine learning projects.</p>
        <div className='intro'>
          <h1>Abdi Vicenciodelmoral</h1>
          <h2>Machine Learning Enthusiast</h2>
          <div className='about-me-buttons'>
            <button onClick={() => handleNavClick('profile')}>About Me</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
          </div>
          </div>
        </div>
        <DailyQuestion/>
      </section>
      
   
      <section id='profile' style={{display: activeSection === 'profile' ? 'block' : 'none'}}>
        <header className='profile-header'>
          <h1>Abdi Vicenciodelmoral</h1>
          <p className='tagline'> Machine Learning Engineer | Data Scientist | Software Engineer</p>
        </header>
        <div className='about-me'>
        <h2> About Me </h2>
        <p>
        I hold a Master’s degree in Computer Science from Washington State University, 
        with a focus on machine learning, data analysis, and software engineering. I 
        am proficient in programming languages including Python, Java, JavaScript, R, 
        C, and SQL, and experienced with machine learning frameworks such as TensorFlow, 
        Keras, and PyTorch. My skills in natural language processing, computer vision, 
        and data analysis are supported by my use of tools like Matplotlib, Seaborn, Pandas, 
        and NumPy. My master’s thesis on "An End-To-End Learning Framework for Supporting 
        Green Neuromorphic Computing" and contributions to various research publications highlight 
        my technical expertise and innovative problem-solving abilities. Professionally, I have 
        demonstrated technical and leadership capabilities through roles such as a Teaching Assistant 
        at Washington State University, where I facilitated learning in programming and data structures. 
        My diverse experiences have prepared me to contribute effectively to software engineering, data 
        analysis, and machine learning projects.
        
        </p>
        </div>
      
      
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

      <div className='footer'>
            <p>@ 2024 Abdi Vicenciodelmoral</p>
      </div>
    </div>
  );
}

export default App;
