import { useEffect, useState } from 'react'
import './App.css'
import Name from './Name'
import Loader from './loader'

function App() {
  const [load, setLoad] = useState(true)
  const [name, setName] = useState("")

  useEffect(()=>{
    setTimeout(() => {
      setLoad(false)
      setName("avni")
    }, 2000);
  })

  return (
    <>

      {!load && (<Name n={name}/>)}
      {load && (<Loader/>)}

    

    </>
  )
}

export default App
