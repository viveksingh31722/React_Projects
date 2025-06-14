import React, { useState, useEffect } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(square) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  }

  function handleClick(getCurrSquare) {
    let cpySquares = [...square];
    if (getWinner(cpySquares) || cpySquares[getCurrSquare]) return;
    cpySquares[getCurrSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquare(cpySquares);
  }

  function handleRestart(){
    setIsXTurn(true);
    setSquare(Array(9).fill(''));
  }

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus(`This is a draw! Please restart the game`);
    } else if (getWinner(square)) {
      setStatus(`Winner is ${getWinner(square)} Restart the Game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [square, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={() => handleRestart()}>Restart the game</button>
    </div>
  );
}
