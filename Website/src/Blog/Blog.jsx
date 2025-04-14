import React from 'react'
import pizza from '../assets/Pizza-1.jpg'
import pizza1 from '../assets/Pizza-2.webp'
import pizza4 from '../assets/Pizza-4.webp'
import pizza5 from '../assets/Pizza-5.webp'
import pizza2 from '../assets/Pizza-3.jpg'
import pizza6 from '../assets/Pizza-6.jpg'

const Blog = () => {
  return (
    <div>
        <div className="pizza">
                <div className="meals">
                    <h1>Hot Pizza Meals</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
                </div>

                <div className="boxs">
                    <div className="italian">
                        <img src={pizza} alt="" />
                    </div>
                    <div className="italian1">
                        <h1> Italian Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <span>$20 <button>Order</button></span>
                    </div>
                    <div className="italian">
                        <img src={pizza1} alt="" />
                    </div>
                    <div className="italian1">
                    <h1> Greek Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <span>$20.90 <button>Order</button></span>
                   
                    </div>
                    <div className="italian">
                        <img src={pizza2} alt="" />
                    </div>
                    <div className="italian1">
                    <h1> Caucasian Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <span>$20 <button>Order</button></span>
                  
                    </div>
                   
                </div>

                <div className="boxs">
                    <div className="italian1">
                        <h1>American Pizza</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <span>$20 <button>Order</button></span>
                    </div>
                    
                    <div className="italian">
                        <img src={pizza4} alt="" />
                    </div>
                    
                    <div className="italian1">
                    <h1> Tomatoe Pie</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <span>$20.90 <button>Order</button></span>
                   
                    </div><div className="italian">
                        <img src={pizza5} alt="" />
                    </div>
                    
                    <div className="italian1">
                    <h1> Margherita</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        <span>$20 <button>Order</button></span>
                  
                    </div>
                    <div className="italian">
                        <img src={pizza6} alt="" />
                    </div>
                   
                </div>
        </div>
    </div>
  )
}

export default Blog
