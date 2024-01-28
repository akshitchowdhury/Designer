import React, { useState } from 'react'

const Tiles = (props) => {



// function handleClick(value){

//     setValue("X")
// }

    return (
    <div>
        <button className='tile' style={{width: '50px', height: '50px'}}
         onClick={props.onSquareClick} >
            {props.value}
        </button>
    </div>
  )
}

export default Tiles