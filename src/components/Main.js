import React, { useState, useReducer } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Homepage from './Homepage'
import BookingPage from './BookingPage'
import Confirmation from './Confirmation'
import {fetchAPI, submitAPI} from './api/fetchAPI'

const Main = () => {

  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const navigate = useNavigate();
 
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_AVAILABLE_TIMES':
        return action.payload;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  
  
  const initializeTimes = async () => {
    const today = new Date();
    const times = await fetchAPI(today);
    dispatch({type: 'SET_AVAILABLE_TIMES', payload: times});
  }

  const updateTimes = async (date) => {
    const times = await fetchAPI(date);
    dispatch({type: 'SET_AVAILABLE_TIMES', payload: times});
  }

  const submitForm = async (formData) => {
    try {
      const response = await fetch(submitAPI(formData))
      .then(response => {
        if (response.ok) {
          // Handle successful response
          navigate('/confirmation');
        } else {
          // Handle error response
        }
      })
    } catch (error) {
      console.log(error);
    }
    
  };
  


  
  return (
    <div>
      <Routes> 
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
      <Route path="/confirmation" element={<Confirmation/>}></Route>
      </Routes>
    </div>
  )
}

export default Main