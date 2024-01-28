import React, { useState } from 'react'

const Tiles = (props) => {

const[value, setValue] = useState(null);


function handleClick(){

    setValue("X")
}

    return (
    <div>
        <button className='tile' style={{width: '50px', height: '50px'}}
          onClick={handleClick}>
            {props.value}
        </button>
    </div>
  )
}

export default Tiles