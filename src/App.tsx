

import './App.css';

function App() {
  let name = "Esme"
  console.log("I have rendered!")
  console.log("name", name)
  return (
    <div className="App">
      <header className="App-header">
        Name changer!
      </header>
      <div>
        Name: {name}
      </div>
      <div>
        Change name to:
        <button onClick={() => name = "Esme"}>Esme</button>
        <button onClick={() => name = "Olivia"}>Olivia</button>
        <button onClick={() => name = "India"}>India</button>
      </div>

    </div>

  );
}

export default App;
