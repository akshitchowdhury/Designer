import React from 'react'
import { useState } from 'react'

    



const Count = () => {

    const [count, setCount] = useState("");

    function handleClick(){
        setCount("X");
    }

    function Click_minus(){
        setCount( "Y");
    }

    return (
    <>
        <h1>{count}</h1>

        <button onClick={handleClick} style={{padding: '3px', margin: '3px'}}>Click to update </button>
        <button onClick={Click_minus} style={{padding:'3px', margin: '3px'}}>Click to negate</button>
    </>
  )
}



export default Count