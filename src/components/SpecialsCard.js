import React from 'react'
import './styles/SpecialsCard.css'

const SpecialsCard = ({title, image, price, desc}) => {
  return (
<article className='food-card'>
      <div className='food-pic-div'>
      <img src={image} className="food-pic" alt="food"/>

      </div>
          <div className='food-titles'>
          <h4>{title}</h4>
<h4 className='food-price'>${price}</h4>
          </div>

<p>
  {desc}
</p>  
<a href="/"> Order a delivery</a>
          </article>
  )
}

export default SpecialsCard