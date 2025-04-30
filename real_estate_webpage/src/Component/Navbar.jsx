import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar w-full h-20 flex flex-col md:flex-row justify-between px-4 md:px-12 items-center">
        {/* Logo */}
        <div className="nav1 h-20 flex justify-center items-center md:w-1/5 w-full mb-4 md:mb-0">
          <img src="src/Assets/Logo.svg" className="w-2/5 md:w-[60%]" alt="Logo" />
        </div>

        {/* Nav Links */}
        <div className="nav2 flex flex-wrap justify-center md:justify-evenly items-center md:w-2/5 w-full gap-4 md:gap-6 text-sm md:text-base">
          <Link to="/">Home</Link>
          <Link to="/About">About us</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Pages">Pages</Link>
          <Link to="/Cart">Cart</Link>
        </div>

        {/* Button */}
        <div className="nav3 flex justify-center md:justify-end items-center md:w-1/5 w-full mt-4 md:mt-0">
          <button className="bg-black text-white px-[20px] h-12 rounded-2xl text-sm md:text-base">
            Explore all
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="header relative w-full min-h-[500px] flex flex-col items-center mt-20 px-4">
        {/* Badge */}
        <div className="flex items-center w-auto px-4 py-2 border mt-[20px] lg:mt-[0px] rounded-full bg-[#F7F7F7] z-20">
          <span className="text-xs md:text-sm font-medium text-gray-800 flex items-center">
            <img src="src/Assets/download.webp" className="w-5 mr-2" alt="icon" />
            BUY & SELL YOUR DREAM
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-[70px] lg:mt-[30px] text-5xl sm:text-7xl md:text-9xl font-semibold tracking-tight text-black uppercase absolute  z-10 text-center">
          REAL-ESTATE
        </h1>

        {/* Background Image */}
        <img
          src="src/Assets/main.webp"
          className="absolute mt-40 z-0 w-[90%] sm:w-[90%] md:w-auto"
          alt="Real Estate"
        />
      </div>
    </div>
  )
}

export default Navbar
