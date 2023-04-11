import React from 'react'
import food from '../assets/ctafood.jpg'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='cta-wrap'>
    <div className='cta-container'>
        <div className='cta-about'>
          <h1> Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in diam augue. Sed vel enim convallis, mollis odio dapibus, bibendum libero. Fusce eu dapibus ante. Etiam dignissim sagittis sapien. Donec tempor eros eu lorem mattis, a vestibulum libero eleifend.
          </p>
          <Link to="/booking">
          <button>
            Reserve a Table
          </button>
          </Link>
        </div>
        <div className='cta-image'>
          <img src={food} alt=""/>

        </div>
    </div>
    </div>
  )
}

export default CallToAction