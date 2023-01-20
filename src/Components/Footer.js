import React from "react";

export const Footer = ({onGameClick, onSuggestClick}) => {
  return (
    <div className="panel footer">
      <button onClick={onGameClick}>New Game</button>
      <button onClick={onSuggestClick}>Suggest</button>
    </div>
  );
};

export default Footer;
