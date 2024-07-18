import React from "react";
import DailyQuestion from "./DailyQuestion";


const Home = ({ handleNavClick, activeSection}) => {
    return (

        <section id='home' style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
        <div className={activeSection === 'home' ? 'intro-background' : ''}>
        <h2>Home</h2>
        <p>Exploring the intersection of data and innovation through advanced analytics projects.</p>
        <div className='intro'>
          <h1>Abdi Vicenciodelmoral</h1>
          <h2>Software Engineering, Data Science, and Machine Learning Enthusiast</h2>
          <div className='about-me-buttons'>
            <button onClick={() => handleNavClick('profile')}>About Me</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
          </div>
          </div>
        </div>
        <DailyQuestion/>
      </section>

    );
};

export default Home;