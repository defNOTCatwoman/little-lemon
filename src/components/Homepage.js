import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

const Homepage = () => {
  return (
    <div>
        <CallToAction/>
        <Specials/>
        <CustomersSay/>
        <Chicago id="chicago"/>
    </div>
  )
}

export default Homepage