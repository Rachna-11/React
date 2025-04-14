import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Navbar/Navbar.css'
import './HeroSection/Hero.css'
import './Blog/Blog.css'
import './Menu/Menu.css'
import './About/About.css'
import App from './App.jsx'
import './services/Services.css'
import './Footer/Footer.css'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
