import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blog/Blog'
import Cart from './Cart/Cart'
import Pages from './Pages/Pages'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element = {<About/>}/>
          <Route path='/Blog' element = {<Blog/>} />
          <Route Path='/Cart' element = {<Cart/>}/>
          <Route path='/Pages' element = {<Pages/>} />
          
        </Routes>
      </Router>
     
    </>
  )
}

export default App
