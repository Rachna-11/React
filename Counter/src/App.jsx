import React, { useEffect, useState } from "react";


const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(()=>{
    alert("hello")
  })


  return (
    <div>
      <div className="counter">Counter = {count}</div>
      <button className="decrement" onClick={decrement}>-</button>
      <button className="increment" onClick={increment}>+</button>
    </div>
  );
};

export default App;
