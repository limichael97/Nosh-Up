import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LOOKUP_EVENTS } from '../utils/queries';
import { Link } from 'react-router-dom';
import CardImage from "../img/food-steak.jpg";
import Auth from '../utils/auth'


const EventList = (username) => {
    console.log(username)

    const [eventState, setEventState] = useState({ cuisineType: null, city: null});
    const {loading, data} = useQuery(QUERY_LOOKUP_EVENTS, {
        variables: {cuisineType:eventState.cuisineType, city: eventState.city},
    });

    const events = data?.LookUpEvents;
    console.log(data)
    console.log(events)
    // var eventDatee = events.eventDate
    // var CurEventDay = []
    // if(eventDatee)
    // {
    //     for(var i = 0; i <eventDatee.length; i++) {
    //         console.log(eventDatee[i]);
    //         CurEventDay.push(eventDatee[i]);
  
    //     }
    //     console.log(CurEventDay)
    // }

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
                 <div className="row mb-2">
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

                <div className="row mb-2">
                {
                    events &&
                    events.map(event => (

                    <div key={event._id} className="col-12 col-md-4">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="card">
                            <img src={CardImage} alt="Nosh Up Logo" className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">{event.cuisineType}</h5>
                            <p className="card-text"><span className="material-icons adjust-icons me-1">restaurant</span>{event.title}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className="material-icons adjust-icons">place</span> {event.city}</li>
                            <li className="list-group-item"><span className="material-icons adjust-icons color-two">today</span> {event.eventDate}</li>
                            {/* <li className="list-group-item"><span className="material-icons adjust-icons color-two">today</span> Variable: Days Until Your event goes here</li> */}

                            <Link to={`/profiles/${event.host}`}>
                                <li className="list-group-item">Host: {event.host}</li>
                            </Link>

                            </ul>
                            <div className="card-body">
                            <button className="btn btn-color-one" type="button" data-toggle="modal1" data-target="#eventModal"><Link to={`/events/${event._id}`} className="text-reset text-decoration-none">See Details</Link></button>
                            </div>
                        </div>

                        </div>
                    </div>

                    ))
                }
                </div>
        </div>
    </>
  )

}

export default EventList;

