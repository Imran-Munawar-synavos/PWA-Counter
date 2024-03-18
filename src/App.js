import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Counter PWA with React</p>
        <div>
          <button style={{ padding: 6 }} onClick={() => setCount(count - 1)}>
            -
          </button>
          <span style={{ margin: "0 10px" }}>{count}</span>
          <button style={{ padding: 5 }} onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
