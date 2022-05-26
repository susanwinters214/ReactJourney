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
      <h1>{title} 2022</h1>
    <p> Hello World! My name is {person.fullname}. I love {person.lang} !!!!        </p>
        
      </header>
    </div>
  );
}

export default App;
