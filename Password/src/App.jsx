import { useState } from "react";
import "./App.css";

export default function PasswordToggle() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container">
      <div className="input-wrapper">
        <input type={visible ? "text" : "password"}  className="password-input" placeholder="Enter password"/>
        <button type="button"  className="toggle-button" onClick={() => setVisible(!visible)} >
          {visible ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
}
