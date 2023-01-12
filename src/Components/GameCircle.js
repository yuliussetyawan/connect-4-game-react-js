import React from "react";
import '../Game.css';

const onClick = (ev, id) => {
  alert("On Click " + id);
};

const GameCircle = ({ id, color, children }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div style={style} className="gameCircle" onClick={(ev) => onClick(ev, id)}>
      {children}
    </div>
  );
};

export default GameCircle;
