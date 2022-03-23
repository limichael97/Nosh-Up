import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateProfile from '../components/UpdateProfile';
import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_EVENT, REMOVE_JOINEVENT } from '../utils/mutations';

import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import CardImage from "../img/food-steak.jpg";

const Dashboard = () => {
    const { loading, data } =useQuery(QUERY_ME)
    const [removeEvent, { error }] = useMutation(REMOVE_EVENT);
    const [removeJoined, { error2 }] = useMutation(REMOVE_JOINEVENT);


    const userData = data?.me || { }
    const CurrentEvents = userData.myCurrentEvent;
    const JoinedEvents = userData.myJoinedEvent;
    console.log(userData)
    console.log(CurrentEvents)
    

    const handleRemove = (eventId) => {
        window.location.reload();
        try {
        console.log(eventId)
        console.log('works')
         removeEvent({
            variables: { eventId: eventId }
        });
        } catch (e) {
        console.log('Does not work')
        console.error(e);
        }
    }

    const handleRemoveJoin = (eventId) => {
        window.location.reload();
        try {
        console.log(eventId)
        console.log('works')
        removeJoined({
            variables: { eventId: eventId }
        });
        } catch (e) {
        console.log('Does not work')
        console.error(e);
        }
    }

    const [isUpdateUserOpen, setIsUpdateUserOpen] = useState(false); 
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setIsUpdateUserOpen(false);
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const toggleUpdateProfile = () => {
        setIsUpdateUserOpen(true);
        handleShow();
    }
    return(
        <>
    <div class="container py-5">
            <div className="row mb-5">                   
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="me-3">                
                                        {userData.avatar && <img className="d-inline avatar-img" width = "200" src={userData.avatar} />}
                                            <h2 className="card-title p-3"><strong className="">User Name: {userData.username}</strong></h2>
                                            <p className="card-text h3">My Bio: {userData.bioText}</p>
                                            <p className="card-text h4"><small className="text-muted">My favorite cuisine: {userData.favoriteCuisine}</small></p>
                                        <button onClick={toggleUpdateProfile}
                                        className="btn btn-color-four my-1"
                                        type="button"
                                        data-toggle="modal"
                                        data-target="#UpdateUserModal"
                                        >Update Profile</button>
                                    </div>
                                </div>
                            </div>             
                        </div>
            
         
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isUpdateUserOpen && (
                        <UpdateProfile onClose={toggleUpdateProfile} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

         {CurrentEvents && CurrentEvents.length ? (
            <h2 className="mt-4">My Current Events</h2>
         ):(
            <h2>You Have not created an event yet...</h2>
         )}
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                CurrentEvents && CurrentEvents.map(event => (
                    
            
                    <div className="col-12 col-md-4" id= {`${event._id}`}>
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
                                    
                                    <Link to ={`/profiles/${event.host}`}>
                                    <li className="list-group-item">Host: {event.host}</li>
                                    </Link>

                                </ul>
                                <div className="card-body">
                                    <button className="btn btn-color-one" type="button" data-toggle="modal1" data-target="#eventModal"><Link to ={`/events/${event._id}`} className="text-reset text-decoration-none">See Details</Link></button>
                                    <button id= {`${event._id}`} className="btn btn-color-two mx-4" type="button" data-toggle="modal1" data-target="#eventModal" onClick={() => handleRemove(event._id)}>Cancel This Event</button>
                                </div>

                            </div>

                        </div>
                    </div>            ))}

            </div>

            <div>
            {JoinedEvents && JoinedEvents.length ? (
                <h2 className="mb-4 mt-4">My Joined Events</h2>
            ):(
            <h2 className="mb-4 mt-4">You Have not joined an event yet...</h2>
            )}
                
            </div>

            
            {
                JoinedEvents && JoinedEvents.map(event => (
            
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
                        <li className="list-group-item"><span className="material-icons adjust-icons color-two">today</span> {event.eventDate}</li>
                      
                        <Link to ={`/profiles/${event.host}`}>
                        <li className="list-group-item">Host: {event.host}</li>
                        </Link>

                    </ul>
                    <div className="card-body">
                        <button className="btn btn-color-one" type="button" data-toggle="modal1" data-target="#eventModal"><Link to ={`/events/${event._id}`} className="text-reset text-decoration-none">See Details</Link></button>
                        <button className="btn btn-color-two mx-5" type="button" data-toggle="modal1" data-target="#eventModal" onClick={() => handleRemoveJoin(event._id)}>Leave Event</button>

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

export default Dashboard;