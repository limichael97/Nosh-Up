import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_EVENTS } from '../utils/queries';


const AddEvent = () => {
    
    const {loading, data} = useQuery(QUERY_EVENTS)
    const events = data?.events
    console.log(data)
    console.log(events)
    // console.log(events.title)

    return (
        <main>

            {
                events &&
                    events.map(event => (
                        <div key = {event._id}>
                            <p>{event.title}</p>
                            <p>{event.cuisineType }</p>
                        </div>
                        
                    ))
            }

        </main>
    )

}

export default AddEvent