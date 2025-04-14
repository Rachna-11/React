import React from 'react'
import about from '../assets/about.webp'
import about1 from '../assets/Pizza-1.jpg'
import about2 from '../assets/Pizza-2.webp'
import about3 from '../assets/Pizza-3.jpg'


const About = () => {
  return (
    <div>
        
        <div className="about">
            <div className="about1">
                <img src={about} alt="" />
            </div>
            <div className="about2">
                <div className="btn">
                    <button>Pizza</button>
                    <button>Drinks</button>
                    <button>Burgers</button>
                    <button>Pasta</button>
                </div>
                <div className="out">
                    <div className="line">
                        <img src={about1} alt="" />
                        <h1>Itallian Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <span>$29</span> <br />
                        <button>Add to cart</button>
                    </div>
                    <div className="line">
                        <img src={about2} alt="" />
                        <h1>Itallian Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <span>$29</span> <br />
                        <button>Add to cart</button>
                    </div>
                    <div className="line">
                        <img src={about3} alt="" />
                        <h1>Itallian Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <span>$29</span> <br />
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About
