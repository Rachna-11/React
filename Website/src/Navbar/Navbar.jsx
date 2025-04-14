import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
  <div className="box">
     <div className="navbar">
          <div className="logo">
          <i class="fa-solid fa-pizza-slice"></i>
            <h1>Pizza <span>Delecius</span></h1>
          </div>
     <div className="navlinks">
           <a href="#" id="home">Home</a>
            <a href="#">Menu</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
     </div>
          </div>
          
            <div className="herosection">
              <h1>Welcome</h1>
              <p>We cooked your <br /> desired pizza recipe</p>
              <span>A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia.</span>
       <br />
        <button id="btn">Order Now</button>
        <button>View Menu</button>
            </div>
            </div>
      
    </div>
  )
}

export default Navbar
