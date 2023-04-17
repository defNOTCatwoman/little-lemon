import React from 'react'
import './styles/TestimonialCard.css'

const TestimonialCard = ({name, img, testimonial}) => {
  return (
    <div className='card-wrap'>
      <img src={img} alt={name} className='card-img'/>
      <h3>{name}</h3>
      <p>{testimonial}</p>

    </div>
  )
}

export default TestimonialCard