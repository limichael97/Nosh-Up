import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import AddEvent from './AddEvent';
import { QUERY_EVENTS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { JOIN_EVENT } from '../utils/mutations';
import CardImage from "../img/food-steak.jpg";

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
                 <div className="row mb-2">
                <h2>Find An Event</h2>
                {
                    events && 
                        events.map(event => (
                           
                            <div className="col-12 col-md-4">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="card">
                                <img src={CardImage} alt="Nosh Up Logo" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{event.cuisineType}</h5>
                                <p className="card-text"><span className="material-icons adjust-icons me-1">restaurant</span>{event.title}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="material-icons adjust-icons">place</span> {event.city}</li>
                                <li className="list-group-item"><span className="material-icons adjust-icons color-two">today</span> March 20th, 2022</li>
                              
                                <Link to ={`/profiles/${event.host}`}>
                                <li className="list-group-item">Created by: {event.host}</li>
                                </Link>

                            </ul>
                            <div className="card-body">
                                <button className="btn btn-color-one" type="button" data-toggle="modal1" data-target="#eventModal"><Link to ={`/events/${event._id}`} className="text-reset text-decoration-none">See Details</Link></button>
                            </div>
                        </div>
                            </div>
                        </div>
                   
                        ))
                }
                </div>
            </div>
    )
    
}

export default EventList;


