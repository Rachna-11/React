import React from 'react'
import box1 from '../assets/box-1.webp'
import box2 from '../assets/box-2.webp'
import box3 from '../assets/box-3.webp'
const Menu = () => {
  return (
    <div>
        
        <div className="pasta">
          <div className="pasta2">
          <h1>Recent from blog</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>         
          </div>

            <div className="pasta1 w-[20%] bg-[black] h-[200px]">
              <div className="Delicious">
                <img src={box1} />
                <p>Sept 10, 2018</p>
                <h1>The Delicious Pizza</h1>
                <h6>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h6>
                </div> 
              <div className="Delicious">
                <img src={box2} />
                <p>Sept 10, 2018</p>
                <h1>The Delicious Pizza</h1>
                <h6>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h6>
                </div> 
              <div className="Delicious">
                <img src={box3} />
                <p>Sept 10, 2018</p>
                <h1>The Delicious Pizza</h1>
                <h6>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h6>
                </div> 
            </div>

            </div>
 
        </div>
        
       
  )
}

export default Menu
