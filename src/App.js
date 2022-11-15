import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <div className="main">
        <input type="text" ref={inputRef} />
      </div>
    </div>
  );
}

export default App;
