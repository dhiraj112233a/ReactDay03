import React from 'react'
import { useState } from 'react'

const Counter = () => {
  
    // useState
    const [count , setCount]= useState(0);

  return (
    <div>
        <h1>Counter : {count}</h1>

        <button onClick={()=> setCount(count+10) } > ➕ </button> <br/>
        <button onClick={()=> setCount(0)} > Reset </button> <br/>
        <button onClick={()=> setCount(count-10)} > ➖ </button>
    </div>
  )
}
export default Counter
