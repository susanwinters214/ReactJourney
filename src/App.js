import logo from './logo.svg';
import './App.css';

function App() {

  const title = "React Journey";
  
  const person = {
    fullname: "Susan Winters",
    lang: "ReactJS"
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>{title}</h1>
        <h2>2022</h2>
        <p>
          Hello World! My name is {person.fullname}. I love {person.lang} !!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
