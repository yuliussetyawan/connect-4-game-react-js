import React from "react";
import '../Game.css';

const onClick = (ev, id) => {
  alert("On Click " + id);
};

const GameCircle = ({ id, children }) => {
  return (
    <div style={id % 2 === 0 ? {backgroundColor:"red"}: {backgroundColor:"blue"}} className="gameCircle" onClick={(ev) => onClick(ev, id)}>
      {children}
    </div>
  );
};

export default GameCircle;
