import React from "react";

import { GAME_STATE_PLAYING } from "../Constants";

export const Footer = ({ onGameClick, onSuggestClick, gameState }) => {
  const renderButtons = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSuggestClick}>Suggest</button>;
    } else {
      return <button onClick={onGameClick}>New Game</button>;
    }
  };
  return <div className="panel footer">{renderButtons()}</div>;
};

export default Footer;
