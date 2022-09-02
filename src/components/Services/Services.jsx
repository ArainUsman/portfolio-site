import React from 'react'
import Card from '../Card/Card'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './Resume.pdf'

const Services = () => {
    return (
        <div className="services" id='Services'>
            <div className="ser-left">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus <br /> reprehenderit
                    velit similique nostrum
                </span>
                <a href={Resume} download>
                    <button className='button ser-btn'>Download CV</button>
                </a>
                <div className="blur ser-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            <div className="ser-right">
                <div style={{ left: '14rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={'Adobe PS, Adobe XD, Figma, Illustrator, Sketch'} />
                </div>
                <div style={{ left: '-4rem', top: '12rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={'HTML, CSS, JavaScript, React JS, React Native, Node JS'} />
                </div>
                <div style={{ left: '12rem', top: '19rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={'Coral Draw, Adobe PS, Adobe XD, Figma, Illustrator, Sketch'} />
                </div>

                <div className="blur ser-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>
        </div>
    )
}

export default Services
