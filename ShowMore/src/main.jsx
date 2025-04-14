import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/Show/show.css'
import Show from '../src/Show/Show.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Show/>
  </StrictMode>,
)
