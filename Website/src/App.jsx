import About from './About/About'
import './App.css'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
import Hero from './HeroSection/hero'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Services from './services/Services'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Blog/>
      <Menu/>
      <About/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
