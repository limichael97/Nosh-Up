import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EVENTS, QUERY_LOOKUP_EVENTS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { JOIN_EVENT } from '../utils/mutations';
import Auth from '../utils/auth'


const EventList = () => {

    const [eventState, setEventState] = useState({ cuisineType: null, city: null});
    //const {loading, data} = useQuery(QUERY_EVENTS);
    const {loading, data} = useQuery(QUERY_LOOKUP_EVENTS, {
        variables: {cuisineType:eventState.cuisineType, city: eventState.city},
    });
    // const [joinEvent] = useMutation(JOIN_EVENT);
    
    //const events = data?.events;
    const events = data?.LookUpEvents;
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

    const handleEventChange = (event) => {
        const { name, value } = event.target;

        setEventState({
            ...eventState,
            [name]: value,
        });
    };
    
    return (
        <>
            <div className="container">
                <h2>Find An Event</h2>

                <div className="col pe-0">
                    <select name ='cuisineType' onChange = {handleEventChange} value={eventState.cuisineType} className='form-input form-control'>
                        <option value={null} id="0">All Cuisine</option>
                        <option value='American' id="1">American</option>
                        <option value='Mexican' id="2">Mexican</option>
                        <option value='Italian' id="3">Italian</option>
                        <option value='Chinese' id="4">Chinese</option>
                        <option value='Indian' id="5">Indian</option>
                        <option value='Japanese' id="6">Japanese</option>
                    </select>
                </div>
                <div className="col pe-0">
                    <select name ='city' onChange = {handleEventChange} value={eventState.city} className='form-input form-control'> 
                        <option value={null} id="0">Anywhere</option>
                        <option value='Sacramento' id="1">Sacramento</option>
                        <option value= 'Rancho Cordova' id="2">Rancho Cordova</option>
                        <option value= 'Carmichael' id="3">Carmichael</option>
                        <option value= 'Roseville' id="4">Rosevilile</option>
                        <option value= 'Folsom' id="5">Folsom</option>
                        <option value= 'To be determined' id="6">To be determined</option>
                    </select>
                </div>
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
    </>
  )

}

export default EventList;

