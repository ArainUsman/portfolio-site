import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

// Import png
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Intro = () => {

    const transition = { duration: 4, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! this is </span>
                    <span>Usman</span>
                    <span>Frontend Developer with high level of experience, working with many well known Organizations since last 5 years..! </span>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className='intro-btn button'>Contact Us</button>
                </Link>
                <div className="intro-icons">
                    <a href="http://www.github.com/ArainUsman/">
                        <img src={Github} alt="Github Icon" />
                    </a>
                    <img src={LinkedIn} alt="LinkedIn Icon" />
                    <img src={Instagram} alt="Instagram Icon" />
                </div>
            </div>
            <div className="intro-right">
                <img src={Vector1} alt="vector" />
                <img src={Vector2} alt="vector" />
                <img src={boy} alt="boy" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-20%' }}
                    transition={transition}

                    src={glassesimoji} alt="glassesimoji" />
                <div className='floating-div' style={{ top: '-4%', left: '65%' }}>
                    <FloatingDiv image={Crown} text1='Web' text2='Developer' />
                </div>
                <div className='floating-div' style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} text1='Best Design' text2='Award' />
                </div>
                {/* Blur Effect div */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro
