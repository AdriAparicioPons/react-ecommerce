import React from 'react'
import { useState } from 'react'

function CounterApp() {
    const [counter, setCounter] = useState(0)
    const addOne = () => {
        setCounter((prevState) =>{
            return prevState + 1
        })
    }
    const removeOne = () => {
        if (counter ===0) return 

        setCounter ((prevState) =>{
            return prevState - 1
        })
    }
    const resetCounter = () => {
        setCounter((prevState) => 0)
    }
    return (
    <>
    <p>
        {counter}
    </p>
    <button onClick={addOne}>+</button>
    <button onClick={removeOne}>-</button>
    <button onClick={resetCounter}>x</button>
    </>
    )
  
}

export default CounterApp