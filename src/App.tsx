import React, {useState} from 'react'

import './App.css';

interface NameFieldprops {
  nametoshow: string,

}

function NameField (props: NameFieldprops) {
  console.log(props)
  return (
    <div> Name: {props.nametoshow} </div>
  )
}

interface ButtonFieldprops {
  name: string,
  clickHandler: () => void
}
function Button (props: ButtonFieldprops) {
  return (
  <button
    onClick = {props.clickHandler} > 
    {props.name}
  </button> )
}

const names = ['Esme', 'Olivia', 'India']

function App() {
  const [name, setName] = useState("Esme")
  // let name = "Esme"
  console.log("I have rendered!")
  console.log("name", name)
  return (
    <div className="App">
      
      <header className="App-header">
        Name changer!
      </header>

     <NameField nametoshow = {name} />   
      
      <div>
        Change name to:
        
        <button onClick={() => setName("Esme")}> Esme </button>
        <button onClick={() => setName("Olivia")}> Olivia </button>
        <button onClick={() => setName("India")}> India</button>
      </div>

    </div>

  );
}

export default App;
