import React from 'react'
import { useState } from 'react'

    



const Count = () => {

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }
    return (
    <>
        <h1>{count}</h1>

        <button onClick={handleClick}>Click to update</button>
    </>
  )
}



export default Count