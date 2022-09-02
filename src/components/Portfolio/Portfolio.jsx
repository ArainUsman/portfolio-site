import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'

const Portfolio = () => {
    return (
        <div className='portfolio' id='Portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* Swiper slider */}
            <Swiper className='portfolio-slider' spaceBetween={30} slidesPerView={3} grabCursor={true}>
                <SwiperSlide><img src={Sidebar} alt="SliderImg" /></SwiperSlide>
                <SwiperSlide><img src={Ecommerce} alt="SliderImg" /></SwiperSlide>
                <SwiperSlide><img src={HOC} alt="SliderImg" /></SwiperSlide>
                <SwiperSlide><img src={MusicApp} alt="SliderImg" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
