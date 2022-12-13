import React from "react";
let value;
function createState(initialValue) {
  if (value === undefined) {
    value = initialValue;
  }
  function getState(newState) {
    value = newState;
  }
  return [value, getState];
}

export default function Custom() {
  const [state, setState] = createState(5);
  console.log(state, setState);
  return (
    <div style={{ margin: "50px" }}>
      <div>
        {state}
        <button onClick={() => state + 1}>+</button>
        <button onClick={() => setState(1)}>-</button>
      </div>
    </div>
  );
}
