import React from 'react'
import Tiles from './Tiles'
import './Board.css'

const Board = () => {
  return (
    <>   
    <div className='main'>
     <div className='c1'><Tiles/>
    <Tiles/>
    <Tiles/>
    </div>

    <div className='c2'><Tiles/>
    <Tiles/>
    <Tiles/>
    </div>

    
    <div className='c3'><Tiles/>
    <Tiles/>
    <Tiles/>
    </div>

</div>
</>

)
}

export default Board