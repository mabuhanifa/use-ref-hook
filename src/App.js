import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([]);

  const onAddName = () => {};
  return (
    <div>
      <div>
        {names.map((name) => (
          <div>{name}</div>
        ))}
      </div>
      <div className="main">
        <input type="text" ref={inputRef} />
      </div>
    </div>
  );
}

export default App;
