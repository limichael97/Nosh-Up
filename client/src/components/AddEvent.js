import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import Auth from '../utils/auth'
import { QUERY_ME } from '../utils/queries';


const AddEvent = () => {

    const { loading, data } = useQuery(QUERY_ME)
    const userData = data?.me || {}
    console.log(userData)
    console.log(userData.username)
    console.log(data)
    const [eventState, setEventState] = useState({ host: '', title: '', cuisineType:'American', city: 'Sacramento', description: '', maxNoshers:''});

  const [addEvent, { error }] = useMutation(ADD_EVENT);
  console.log(eventState)

    const handleEventChange = (event) => {
        const { name, value } = event.target;

    setEventState({
      ...eventState,
      [name]: value,
      host: userData.username
    });
  };

  const handleEventSubmit = async event => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token)

    if (!token) {
      console.log('Nope')
      return false;
    }

    //  try/catch instead of promises to handle errors
    try {
      console.log('Yep')
      console.log(eventState)
      // execute addUser mutation and pass in variable data from form
      const { data } = await addEvent({
        variables: { input: { ...eventState } }
      });

    } catch (e) {
      console.log('does not work')
      console.error(e);
    }

    setEventState({
      title: '',
      cuisineType: '',
      description: '',
      maxNoshers: ''
    })
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }


  return (
    <main>
      <form className="container py-3" onSubmit={handleEventSubmit}>
        <h2>Create An Event</h2>
        <div className="row my-3 d-flex justify-content-start">
          <div className="col pe-0">
            <input
              className='form-input form-control mb-3'
              placeholder='Title'
              name='title'
              type='text'
              id='title'
              value={eventState.title}
              onChange={handleEventChange}
            />

            <input
              className="form-control mb-3"
              id="event-date"
              type="datetime-local"
              placeholder=""
              name="eventDate"
              value={eventState.eventDate}
              onChange={handleEventChange}
            />

            <label htmlFor='Cuisine'> Cuisine</label>
            <select name='cuisineType' onChange={handleEventChange} value={eventState.cuisineType} className='form-input form-control mb-3'
            >
              <option value='American' id="1">American</option>
              <option value='Mexican' id="2">Mexican</option>
              <option value='Italian' id="3">Italian</option>
              <option value='Chinese' id="4">Chinese</option>
              <option value='Indian' id="5">Indian</option>
              <option value='Japanese' id="6">Japanese</option>
            </select>

            <label htmlFor='City'> City</label>
            <select name='city' onChange={handleEventChange} value={eventState.city} className='form-input form-control mb-3'>                       
              <option value='Sacramento' id="1">Sacramento</option>
              <option value='Rancho Cordova' id="2">Rancho Cordova</option>
              <option value='Carmichael' id="3">Carmichael</option>
              <option value='Roseville' id="4">Rosevilile</option>
              <option value='Folsom' id="5">Folsom</option>
              <option value='To be determined' id="6">To be determined</option>
            </select>

            <textarea
              className='form-control mb-3 h-25'
              placeholder='Description'
              name='description'
              type='text'
              rows="4" cols="50"
              id='description'
              value={eventState.description}
              onChange={handleEventChange}>
            </textarea>

            <label htmlFor='Max Noshers'> Max Noshers</label>
            <input
              className='form-input form-control mb-3'
              placeholder='Including Host'
              name='maxNoshers'
              type='number'
              id='maxNoshers'
              value={eventState.maxNoshers}
              onChange={handleEventChange}
            />
            <button className='btn btn-color-one' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>

    </main>
  )
}



export default AddEvent;