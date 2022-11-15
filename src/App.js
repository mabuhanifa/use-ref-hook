import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  return (
    <div>
      <div>
        <input type="text" ref={inputRef}/>
      </div>
    </div>
  );
}

export default App;
