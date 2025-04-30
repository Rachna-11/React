import { useState } from 'react'
import './App.css'
import Card from './card'

function App() {
  const [name, setName] = useState(() => localStorage.getItem('name') || '')
  const [submittedName, setSubmittedName] = useState(() => localStorage.getItem('name') || '')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('name', name)
    setSubmittedName(name)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter the name" 
          value={name} 
          onChange={handleChange} 
        />
        <input type="submit" value="Submit" />
      </form>

      {submittedName &&   <Card name={submittedName}/>}
    </>
  )
}

export default App
