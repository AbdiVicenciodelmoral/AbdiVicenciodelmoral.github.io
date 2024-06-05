
import './App.css';

function App(){
  const handleClick = () => {
    alert('Button Clicked!');
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello
        </h1>
        <button onClick={handleClick} className="my-button">Button</button>

      </header>
    </div>
  );
}

export default App;
