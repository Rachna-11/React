  import { useState } from "react";
  import "./App.css";

  function App() {
    const [darkMode, setDarkMode] = useState("white");

    let toggleTheme = () => {
      setDarkMode(darkMode === "white" ? "black" : "white")
    };

    return (
      
        <>

          <div className="container" style={{backgroundColor : darkMode}}>
          <label htmlFor="theme" className="theme">
          <span className="theme__toggle-wrap">
            <input  id="theme"  className="theme__toggle" type="checkbox" role="switch" name="theme" onClick={toggleTheme}  />
            
            <span className="theme__fill"></span>
            <span className="theme__icon">
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
            </span>
          </span>
        </label>
          </div>

        
        </>
    );
  }

  export default App;
