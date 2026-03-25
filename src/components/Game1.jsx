import React, { useState } from "react";
import "./Game1.css";

const Square = ({ value, idx, clickFn, isWinning }) => {
  const style = {
    width: "60px",
    height: "60px",
    border: "1px solid black",
    fontSize: "24px",
    
  };

  return (
    <button
      className={`square ${isWinning ? "winner" : ""} ${value ? "filled" : ""}`}
      style={style}
      onClick={() => {
        clickFn(idx);
      }}
    >
      {value}
    </button>
  );
};

const Game1 = () => {
  const [player, setPlayer] = useState("X");
  const [arr, setArr] = useState(Array(9).fill(null));
  const [isPlaying, setIsPlaying] = useState(true);
  const [winningLine,setWinningLine]=useState([]);
  const [result,setResult]=useState(null)

  function checkWinner(board) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return {winner:board[a], line:pattern};
      }
    }

    return null;
  }

  function handleClick(idx) {
    if (!isPlaying) return;

    if (arr[idx] !== null) {
      alert("Choose another box");
      return;
    }

    const newArr = [...arr];
    newArr[idx] = player;
    setArr(newArr);

    setPlayer((prev) => (prev === "X" ? "O" : "X"));

    const resultData = checkWinner(newArr);

    if (resultData) {
      setWinningLine(resultData.line)
      setResult(`Winner ${resultData.winner}`)
      setIsPlaying(false);
      return;
    }

    if (!newArr.includes(null)) {
      setResult("Match Draw")
      setIsPlaying(false);
      return;
    }
  }

  function handleReset(){
    setArr(Array(9).fill(null));
     setPlayer("X");
    setIsPlaying(true);
    setWinningLine([]);
    setResult(null)
  }

  return (
    <div className="parent">
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <h2>{isPlaying ? `Player ${player}` : result}</h2>

        <div className="board">
          {arr.map(function (val, idx) {
            return (
              <Square value={val} idx={idx} key={idx} clickFn={handleClick} isWinning={winningLine.includes(idx)} />
            );
          })}
        </div>
          <button className="button-container" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Game1;
