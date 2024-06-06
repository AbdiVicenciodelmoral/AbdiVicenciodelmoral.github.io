
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
      </section>

    </div>
  );
}

export default App;
