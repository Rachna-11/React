import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FFFFFF"); 

  function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <button onClick={() => setColor(generateRandomColor())}>
        Change Color
      </button>
    </div>
  );
}

export default App;
