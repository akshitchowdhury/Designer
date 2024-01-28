import React, { useState } from 'react'
import Tiles from './Tiles'
import './Board.css'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    let stats;
    if(winner){
        stats = "Winner"+ winner;
    }
    else{
        stats = "Next player : " + (xIsNext ? "X": "O");
    }
    

    function handleClick(i){
        

    if(squares[i] || calculateWinner(squares)){
        return;
    }        
        const nextSquares = squares.slice();



        if(xIsNext){
            nextSquares[i] = "X";
        }

        else{
            nextSquares[i] = "O";
        }
        
        setSquares(nextSquares); 
        setXIsNext(!xIsNext) 
    }
    
    return (

    <>   
    <div className='status'> {stats}</div>
    <div className='main'>
     <div className='c1'><Tiles value={squares[0]} onSquareClick={()=>handleClick(0)}/>
    <Tiles value={squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Tiles value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>

    <div className='c2'><Tiles value={squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Tiles value={squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Tiles value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>

    
    <div className='c3'><Tiles value={squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Tiles value={squares[7]} onSquareClick={()=>handleClick(7)}/>
    <Tiles value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>

</div>
</>

)
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Board