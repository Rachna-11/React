import React, { useEffect, useState } from "react";
import "./show.css";

const Show = () => {
  const [click, setDiv] = useState(true);

  function ShowDiv() {
    setDiv(!click); 
  }

  useEffect(() => {
    alert("")

    let New = document.createElement("div");
    New.classList.add("div");
    document.body.appendChild(New);

  }, [click]);

  return (
    <>
      <button onClick={ShowDiv}>Show More</button>
    </>
  );
};

export default Show;
