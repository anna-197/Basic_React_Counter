import React, {useState} from 'react'

function Component(){

    // Set the initial state ,useState, to 0
    const [counter, setCounter]=useState(0);
    
    // Create Increment onclick event handler
        function increment(){
            setCounter(counter+1);
        };

        const decrement = () => {
            setCounter(counter-1);
        };

        const reset = () => {
            setCounter(0);
        };

  return (
    <div className='container'>
    <h1>COUNTER</h1>
        <div className='count'> {counter} </div>
      <div className='buttons'>
        <button className='decrement' onClick={decrement}>DECREMENT</button>
        <button className='reset' onClick={reset}>RESET</button>
        <button className='increment' onClick={increment}>INCREMENT</button>

      </div>
    </div>
  )
}

export default Component;



        