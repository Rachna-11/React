import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
// import "script.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
