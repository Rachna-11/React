import React from 'react'
import about from '../assets/about.webp'
const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="box1">
                <div className="part1">
                <i class="fa-solid fa-phone"><span>000 (123) 456 7890</span></i>
                    
                    <p>A small river named Duden <br /> flows</p>
                </div>
                <div className="part1">
                <i class="fa-solid fa-location-crosshairs"><span>
                198 West 21th Street</span></i>
                    <p>Suite 721 New York NY 10016</p>
                </div>
                <div className="part1">
                <i class="fa-solid fa-clock"><span>Open Monday-Friday</span></i>
                    <p>8:00am - 9:00pm</p>
                </div>
            </div>  
            <div className="box2">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
             </div>  
        </div>

        <div className="welcome">
            <div className="img1">
                <img src={about} alt="" />
            </div>
            <div className="img2">
                <h1>Welcome to <span>Pizza</span> A Restaurant</h1>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            </div>

        </div>
    </div>
  )
}

export default Hero
