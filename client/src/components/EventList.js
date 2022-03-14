import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import AddEvent from './AddEvent';
import { QUERY_EVENTS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { JOIN_EVENT } from '../utils/mutations';

const EventList = () => {
    
    const {loading, data} = useQuery(QUERY_EVENTS)
    // const [joinEvent] = useMutation(JOIN_EVENT);

    const events = data?.events
    console.log(data)
    console.log(events)
    // console.log(events.title)


    // const handleJoin = async () => {
    //     try {
    //       await joinEvent({
    //         variables: { eventId: events._id  }
    //       });
    //     } catch (e) {
    //       console.error(e);
    //     }
    // };
    
    return (
        
            <div className="container">
                <h2>Find An Event</h2>
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
                                        <h3 className="mb-0"><span class="material-icons">restaurant</span>{event.title}</h3>
                                        <div className="mb-1"><span class="material-icons adjust-icons">place</span> {event.city}</div>
                                        <hr></hr>
                                        <p className="my-3"><span class="material-icons adjust-icons color-two">today</span> March 20th, 2022</p>
                                        <Link to ={`/events/${event._id}`}>

                                            <p className="mb-auto"><span className="color-one fw-bold"></span> Get More Details</p>
                                        </Link>

                                        {/* <p className="mb-auto"><span className="color-one fw-bold">{event.maxNoshers}</span> Max Noshers </p> */}

                                        {/* <p className="mb-auto"><span className="color-one fw-bold">1</span> Noshers Attending</p> */}
                                        <Link to ={`/profiles/${event.host}`}>
                                            <strong className="d-inline-block mb-3 my-3 ">Created by: {event.host}</strong>
                                        </Link>


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


