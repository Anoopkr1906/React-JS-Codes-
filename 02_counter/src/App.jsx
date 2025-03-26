
import { useState } from 'react';

import './App.css'
import { use } from 'react';

function App() {

  let [counter , setCounter]= useState(0);

  // let counter = 5;

  const Increment = () =>{
    counter = counter + 1;
    setCounter(counter);
  }
  const Decrement = () =>{
    
    counter = counter - 1;
    if(counter < 0){
      return ;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Anoop Burnwal</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={Increment}>Increment Value</button>
      <br />
      <br />
      <button onClick={Decrement}>Decrement Value</button>
    </>
  )
}

export default App
