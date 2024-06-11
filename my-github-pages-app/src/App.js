
import Navbar from './components/Navbar';
import './App.css';

function App(){
  const handleClick = () => {
    alert('Button Clicked!');
  };


  return (
    <div className="App">
      <Navbar />
      <section id='home'>
        <h2>Home</h2>
        <p>Exploring the intersection of data and innovation through machine learning projects.</p>
      </section>
      <section id='profile'>
        <h2>Profile</h2>
        <p>This section showcases my skills, knowledge, and experience</p>
      </section>

    </div>
  );
}

export default App;
