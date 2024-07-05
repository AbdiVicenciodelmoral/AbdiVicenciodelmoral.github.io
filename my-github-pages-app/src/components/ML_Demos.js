import React from "react";
import IrisDemo from './IrisDemo'; // Import the IrisDemo component


const MLDemos = ({handleNavClick,activeSection,selectedDemo,setSelectedDemo}) => {
    const handleDemoClick = (demo) => {
    console.log('Demo Clicked:', demo);
    setSelectedDemo(demo);
    };

    return (

        <section id='ml-demos' style={{ display: activeSection === 'ml-demos' ? 'block' : 'none' }}>
          <h1>Machine Learning Demos</h1>
          <div className='demo-list' style={{ display: !selectedDemo ? 'block' : 'none' }}>
            <h2>Available Demos</h2>
            <ul>
            <li onClick={() => handleDemoClick('iris')}>Iris Flower Classification</li>
              {/* Add more demos here */}
            </ul>
          </div>
          {selectedDemo === 'iris' && <IrisDemo />}
        </section>

    );
};

export default MLDemos;