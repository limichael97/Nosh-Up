import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import Auth from '../utils/auth'
import { QUERY_ME } from '../utils/queries';


const AddEvent = () => {

    const { loading, data } =useQuery(QUERY_ME)
    const userData = data?.me || {}
    console.log(userData)
    console.log(userData.username)
    console.log(data)
    const [eventState, setEventState] = useState({ host: '', cuisineType:'', description: '', maxNoshers:''});

    const [addEvent,{ error }] = useMutation(ADD_EVENT);
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
        event.preventDefault();

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
          const {data} = await addEvent({
            variables: { input:{...eventState} }
          });
    
        } catch (e) {
          console.error(e);
        }
    };

    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
    }


    return(
        <main>
            <div>
                <form onSubmit= {handleEventSubmit}>
                    <input
                        className='form-input'
                        placeholder='Cuisine'
                        name='cuisineType'
                        type='text'
                        id='cuisineType'
                        value={eventState.cuisineType}
                        onChange={handleEventChange}
                    />
                    <input
                        className='form-input'
                        placeholder='Event Details'
                        name='description'
                        type='text'
                        id='description'
                        value={eventState.description}
                        onChange={handleEventChange}
                    />
                    <input
                        className='form-input'
                        placeholder='Max Diners Desired'
                        name='maxNoshers'
                        type='number'
                        id='maxNoshers'
                        value={eventState.maxNoshers}
                        onChange={handleEventChange}
                    />
                    <button className='btn d-block w-100' type='submit'>
                    Submit
                    </button>
                </form>
            </div>

        </main>
    )
}

export default AddEvent;