import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([
    { id: 1, name: "Jhon Steve" },
    { id: 2, name: "Abraham Luke" },
  ]);

  const onAddName = () => {
    setNames([...names, inputRef.current.value]);
  };
  return (
    <div className="main">
      <div>
        {names.map((name) => (
          <div key={name.id}>{name.name}</div>
        ))}
      </div>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={onAddName}>Add Name</button>
      </div>
    </div>
  );
}

export default App;
