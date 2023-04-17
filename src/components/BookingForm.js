import React from 'react'
import { useState } from 'react';
import './styles/BookingForm.css'

const BookingForm = (props) => {

    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [phoneNumber, setPhoneNumber] = useState ("");
    const [date, setDate] = useState("");
    const [time, setTime] =useState("17:00")
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");
    const [seating, setSeating] = useState("Indoor");
    const [accessibility, setAccessibility] = useState("No");

    
  

    let currentDate = new Date().toJSON().slice(0, 10);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        date,
        time,
        guests,
        occasion,
        seating,
        accessibility
      };
      props.submitForm(formData);
      clearForm();
    };
  
    const clearForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("")
    };
  
  return (
    
    <div className='wrap'>
    <div className='form' >
      <form onSubmit={handleSubmit}>
          <div className='two-options'>
          <label htmlFor='firstname' id='firstname'>First Name</label>
          <input type="text" placeholder="First Name" required value={firstName} onChange={(e) => {
            setFirstName(e.target.value)
          }} aria-label="First Name"/>
          <label htmlFor='lasttname' id='firstname'>Last Name</label>
          <input type="text" placeholder="Last Name" required value={lastName} onChange={(e) => {
            setLastName(e.target.value)
          }} aria-label="Last Name"/></div>
<div className='two-options'>
          <label htmlFor='email' id='email'>Email Address</label>
          <input type="text" placeholder="yourname@email.com" required value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} aria-label="Email Address"/>
          <label htmlFor='phonenumber' id='phonenumber'>Phone Number</label>
          <input type="tel" placeholder="(XXX)-XXX-XXXX" required value={phoneNumber} onChange={(e) => {
            setPhoneNumber(e.target.value)
          }} aria-label="Phone Number"/>
</div>
<div className='two-options'>
      <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" min={currentDate} value={date} required onChange={(e) => setDate(e.target.value)} aria-label="Choose Date" />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time " value={time} required onChange={(e) => setTime(e.target.value)}aria-label="Choose Time">
    {props.availableTimes.map((availableTimes) => {
        return <option key={availableTimes}>{availableTimes}</option>
    })}
    </select>
    </div>
    <div className='two-options'>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} required onChange={(e) => setGuests(e.target.value)} aria-label="Number of Guests" />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" value={occasion}  onChange={(e)=> setOccasion(e.target.value)} aria-label="Occasion">
       <option>Birthday</option>
       <option>Anniversary</option>
       <option>Engagement</option>
    </select>
    </div>
    <div className='two-options'>
    <label htmlFor="seating">Seating Location</label>
    <select id="seating" value={seating}  onChange={(e)=> setSeating(e.target.value)} aria-label="Seating Location">
       <option>Indoor</option>
       <option>Outdoor</option>
    </select>
    <label htmlFor='accessibility'>Do you require accessibility options?</label>
    <select id="accessibility" value={accessibility} onChange={(e)=> setAccessibility(e.target.value)} aria-label="Do you require accessibility options?">
       <option>No</option>
       <option>Yes</option>
    </select>
</div>
<div className='button-wrap'>
   <input className='submit-btn' type="submit" value="Make Your Reservation" />
</div>
 </form>
 </div>
 </div>
  )
}

export default BookingForm