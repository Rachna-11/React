import React from 'react'
import back1 from '../assets/bg (1).webp'
import back2 from '../assets/bg (2).webp'
import back3 from '../assets/bg (3).webp'
import back4 from '../assets/bg (4).webp'

const Services = () => {
  return (
    <div>
        
        <div className="back">
            <div className="back1">
                <img src={back1} alt="" />
            </div>
            <div className="back1">
                <img src={back2} alt="" />
            </div>
            <div className="back1">
                <img src={back4} alt="" />
            </div>
            <div className="back1">
                <img src={back3} alt="" />
            </div>
        </div>

        <div className="background">
            <div className="servies">
                <div className="icon">
                <i class="fa-solid fa-pizza-slice"></i>
                </div>
                <h1>100</h1>
                <p>Pizza Branches</p>
            </div>
            <div className="servies">
                <div className="icon">
                <i class="fa-solid fa-award"></i>
                </div>
                <h1>85</h1>
                <p>Number of Awards</p>
            </div>
            <div className="servies">
                <div className="icon">
                    <i class="fa-solid fa-users"></i>
                </div>
                <h1>10,567</h1>
                <p>Happy Customer</p>
            </div>
            <div className="servies">
                <div className="icon">
                <i class="fa-solid fa-kitchen-set"></i>
                </div>
                <h1>900</h1>
                <p>Staff</p>
            </div>
        </div>

    </div>
  )
}

export default Services
