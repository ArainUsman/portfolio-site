import React from 'react'
import './Work.css'
import { Link } from 'react-scroll'

// Import icons
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const Work = () => {
    return (
        <div className='work'>
            <div className="ser-left work-left">
                <span>Work for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus
                    <br />
                    reprehenderit velit similique nostrum
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    reprehenderit velit similique nostrum
                </span>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className='button ser-btn'>Hire Me</button>
                </Link>
                <div className="blur ser-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            <div className="work-right">
                <div className="work-mainCircle">
                    <div className="work-secCircle"><img src={Upwork} alt="Upwork icons" /></div>
                    <div className="work-secCircle"><img src={Fiverr} alt="fiverr icon" /></div>
                    <div className="work-secCircle"><img src={Amazon} alt="Amazon icon" /></div>
                    <div className="work-secCircle"><img src={Shopify} alt="Shopify icon" /></div>
                    <div className="work-secCircle"><img src={Facebook} alt="Facebook icon" /></div>
                </div>

                {/* Background Circle */}
                <div className="work-backCircle blueCircle"></div>
                <div className="work-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work
