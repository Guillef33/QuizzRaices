import React, { useState, useEffect, useRef, useContext } from "react";
import "./Counter.css";

import { AppContext } from "../../context/AppContext";

function Counter() {
  const { twoDigits, secondsToDisplay, handleStart, losing } =
    useContext(AppContext);

  return (
    <div className="Counter">
      <div className="countdown-container">
        <div className="seconds">
          <h2 className={losing ? "danger" : ""}>
            {twoDigits(secondsToDisplay)}
          </h2>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
