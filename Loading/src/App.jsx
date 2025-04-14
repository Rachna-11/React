import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const display = document.getElementById('display');
    if (display) {
      setTimeout(() => {
        display.classList.add('show');
        display.classList.remove('hide');
      }, 2000);
    }

    const handleBodyClick = (e) => {
      if (display && !display.contains(e.target)) {
        setVisible(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);
      

  const Close = () => {
    setVisible(false);  
  };

  return (
    <>
    { visible && (
        <div className="box" id="display">
          <span className="close-icon" onClick={Close}>&times;</span>
          <h1>Welcome!</h1>
          <p>Experience a fresh, modern, and creative UI with vibrant colors and a smooth effect.</p>
          <button id="btn" onClick={Close}>Close</button>
        </div>
     ) }
    </>
  );
}

export default App;
