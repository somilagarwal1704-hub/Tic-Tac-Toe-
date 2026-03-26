import React, { useState } from 'react'
import "./score.css"

function Score({winner, score, isPlaying,fnReset, fnRestart}) {

     
  return (
    <div className='parent'>
      <div className='container'>
          <h1>Scoreboard</h1>
          
          <div className='table-container'>
               <table>
                 <tr>
                    <th>Player</th>
                    <th>Score</th>
                 </tr>
                    <tr className={winner?.includes("X") ? "win-row" : ""}>
                         <td>X</td>
                         <td>{score.X}</td>
                    </tr>
                    <tr className={winner?.includes("O") ? "win-row" : ""}>
                         <td>O</td>
                         <td>{score.O}</td>
                    </tr>
               </table>
               <span style={{
                    width:"100%",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between"
               }}>
               <button className="button-container" style={{background:"darkviolet"}} onClick={fnReset} >Reset</button>
                <button className="button-container" onClick={fnRestart}>Play Again</button>
               </span>
          </div>
      </div>
    </div>
  )
}

export default Score
