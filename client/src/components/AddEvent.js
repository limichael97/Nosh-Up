import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import Auth from '../utils/auth'
import { QUERY__ME } from '../utils/queries';


const AddEvent = () => {

    const [eventState, setEventState] = useState({ host: '', cuisineType:'', description: '', maxNoshers:''});

    const { loading, data } =useQuery(QUERY__ME)
    const [addEvent,{ error }] = useMutation(ADD_EVENT);
    console.log(eventState)

    const user = data?.me 
    console.log(user)

    const handleEventChange = (event) => {
        const { name, value } = event.target;
    
        setEventState({
          ...eventState,
          [name]: value,
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

    return(
        <main>
            <div>
                <form onSubmit= {handleEventSubmit}>
                    <input
                        className='form-input'
                        placeholder='Your Name'
                        name='host'
                        type='text'
                        id='host'
                        value={user.username}
                        onChange={handleEventChange}
                    />
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
                        placeholder='Description'
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