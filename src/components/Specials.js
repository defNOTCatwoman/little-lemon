import React from 'react'
import './styles/Specials.css'
import SpecialsCard from './SpecialsCard'
import greekSalad from '../assets/greeksalad.jpg'
import lemonDessert from '../assets/lemondessert.jpg'
import bruchetta from '../assets/bruchetta.svg'

const Specials = () => {

  

  return (
    <div className='special-wrap'>
    <div className='specials-container'>
      <div className='card'>
      <SpecialsCard title={"Greek Salad"} image={greekSalad} price={12.99} desc={"Vestibulum accumsan velit nunc, in dapibus ex volutpat id. Fusce sollicitudin quam et enim posuere ultrices."}/>
      <SpecialsCard title={"Bruschetta"} image={bruchetta} price={12.99} desc={"Mauris congue id arcu ut rhoncus. Nulla facilisi. Etiam ultrices nisl ac vehicula varius."}/>
      <SpecialsCard title={"Lemon Dessert"} image={lemonDessert} price={12.99} desc={"Vivamus egestas odio nec magna luctus fringilla. Donec porta pretium dui sed sodales."}/>
</div>
</div>
</div>
  )
}

export default Specials