
import Navbar from './components/Navbar';
import './App.css';

function App(){
  const handleClick = () => {
    alert('Button Clicked!');
  };


  return (
    <div className="App">
      <Navbar />
      <section id='Home'>
        <h2>Home</h2>
        <p>Exploring the intersection of data and innovation through machine learning projects.</p>
      </section>

    </div>
  );
}

export default App;
