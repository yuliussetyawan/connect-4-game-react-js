import React, { useState, useEffect } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, getRandomComputerMove } from "../helper";
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  NO_CIRCLES,
} from "../Constants";

const GameBoard = () => {
  // create 16 array with default value of zero
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);
  console.log(gameBoard);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    console.log("init game");
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setGameState(GAME_STATE_PLAYING);
  };

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const suggestMove = () => {
    circleClicked(getRandomComputerMove(gameBoard))
  }

  const circleClicked = (id) => {
    console.log("circle clicked" + id);

    if (gameBoard[id] !== NO_PLAYER) return;
    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
    }

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };
  return (
    <>
      <Header
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initBoard()};</div>
      <Footer onGameClick={initGame} onSuggestClick={suggestMove}/>
    </>
  );
};

export default GameBoard;
