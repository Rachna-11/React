import React from 'react'
import Navbar from '../Component/Navbar'
import Blog from '../Blog/Blog'
import AboutUs from '../About/About'
import Property from '../Property/property'
import RealEstateHighlight from '../market/market'
import House from '../House/house'
import Slider from '../Slider/Slider'
// import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
       <Blog/>
      <AboutUs/>
      <Property/>
      <RealEstateHighlight/>
      <House/>
      <Slider/>
       {/* <Footer/>  */}
    </div>
  )
}

export default Home
