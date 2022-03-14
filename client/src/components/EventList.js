import React from 'react';
import { useQuery } from '@apollo/client';
import AddEvent from './AddEvent';
import { QUERY_EVENTS } from '../utils/queries';


const EventList = () => {
    
    const {loading, data} = useQuery(QUERY_EVENTS)
    const events = data?.events
    console.log(data)
    console.log(events)
    // console.log(events.title)

    return (
        
            <div className="container">
                <div>
                    <AddEvent/>
                </div>
                {
                    events && 
                        events.map(event => (
                            <div className="row mb-2">
                            <div className="col-md-12">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col-auto d-none d-lg-block featured-img-3">
        
                                </div>
                                <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-3 color-four">{event.cuisineType}</strong>
                                <h3 className="mb-0"><span class="material-icons">restaurant</span> {event.title}</h3>
                                <div className="mb-1"><span class="material-icons adjust-icons">place</span> 1215 19th St, Sacramento, CA 95811</div>
                                <hr></hr>
                                <p className="my-3"><span class="material-icons adjust-icons color-two">today</span> March 20th, 2022</p>
                                <p className="mb-auto"><span className="color-one fw-bold">{event.maxNoshers}</span> Max Noshers </p>

                                <p className="mb-auto"><span className="color-one fw-bold">1</span> Noshers Attending</p>
        
                                </div>
                            </div>
                            </div>
                        </div>
                            
                        ))
                }

            </div>

    )

}

export default EventList


