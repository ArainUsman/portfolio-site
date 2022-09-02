import React from 'react'
import './Card.css'

const Card = ({emoji,heading,details}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="Emoji" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="card-btn">LEARN MORE</button>
    </div>
  )
}

export default Card
