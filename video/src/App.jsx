import { useRef } from 'react'
import './App.css'

function App() {

  const video = useRef()
  
  let play = (()=>{
    video.current.play()
  })

  let pause = (()=>{
    video.current.pause()
  })
  let time1 = (()=>{
    video.current.currentTime += 10
  })
  let time2 = (()=>{
    video.current.currentTime -= 10
  })
  let volume = (()=>{
    video.current.volume = 0.5
  })
  let muted = (()=>{
    video.current.muted = true
  })


  return (
    <>
      <video ref={video} 
        src="https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4" 
        style={{ width: "100%" , height : "400px" }} 
      />

      <button onClick={play} >Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={time1}>+10</button>
      <button onClick={time2}>-10</button>
      <button onClick={volume}>volume</button>
      <button onClick={muted}>muted</button>
    </>
  )
}

export default App
