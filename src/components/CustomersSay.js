import React from 'react'
import TestimonialCard from './TestimonialCard'
import placeholder from '../assets/placeholderimg.png'

const CustomersSay = () => {
  return (
    <div className='testimonial-wrap'>   
    <div className='testimonial-header'> 
    <h3>Testimonials</h3> </div>
      <div className='testimonial-container'>
      <TestimonialCard name='Bob' img={placeholder} testimonial={"Staff was helpful. Lovely atmosphere. Try the lemon dessert!"}/>
      <TestimonialCard name='Alice' img={placeholder} testimonial={"My husband brought me here for my birthday. The servers were so kind and helped me pick out the perfect appetizer."}/>
      <TestimonialCard name='Riley' img={placeholder} testimonial={"It's so rare to find a dairy-free option for those with allergies. This place is amazing!"}/>
      <TestimonialCard name='Andrew' img={placeholder} testimonial={"This is where I take my wife for her anniversary every year. The owners are so nice and always make our day special."}/>
          </div>
      </div>
  )
}

export default CustomersSay