import React, { useEffect, useRef, useState } from "react";

export default function CustomRef() {
  const inputRef = useRef(null);
  const id = useRef(1);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([
    { id: id.current++, name: "Jhon Steve" },
    { id: id.current++, name: "Abraham Luke" },
  ]);

  const onAddName = () => {
    setNames([...names, { id: id.current++, name: inputRef.current.value }]);
  };
  return (
    <div className="main">
      <div>
        {names.map((name) => (
          <div key={name.id}>
            {name.id}-{name.name}
          </div>
        ))}
      </div>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={onAddName}>Add Name</button>
      </div>
      <div>
        <div>{JSON.stringify()}</div>
      </div>
    </div>
  );
}
