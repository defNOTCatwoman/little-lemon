import React from 'react'
import BookingForm from './BookingForm'
import Header from './Header'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


const BookingPage = ({availableTimes, dispatch, submitForm, title}) => {


  return (
    <div>
    <Header title={"Make Your Reservation"}/>
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>

 </div>
  )
}

export default BookingPage