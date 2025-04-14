import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// export default function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "dark-mode" : "light-mode"}>
//       <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
//       <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>
//     </div>
//   );
// }
