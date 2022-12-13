import React from "react";

let state;

function createState(setState) {
  if (state === undefined) {
    state = setState;
  }
  function getState(newState) {
    state = newState;
  }
  return [state, getState];
}

export default function Custom() {
  const [state, setState] = createState("5");
  console.log(state, setState);
  return (
    <div style={{"margin": "50px"}}> 
      <div>
        {state}
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
