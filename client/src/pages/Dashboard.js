import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateProfile from '../components/UpdateProfile';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import CardImage from "../img/food-steak.jpg";

const Dashboard = () => {
    const { loading, data } =useQuery(QUERY_ME)
    const userData = data?.me || { }
    const CurrentEvents = userData.myCurrentEvent;
    const JoinedEvents = userData.myJoinedEvent;
console.log(userData)

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

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    {userData.avatar && <img src={require(`../img/avatar-${userData.avatar}.jpg`)} />}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {userData.username}</h5>
                            <p className="card-text">Here's my bio: {userData.bioText}</p>
                            <p className="card-text"><small className="text-muted">My favoriate cuisine: {userData.favoriteCuisine}</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={toggleUpdateProfile} 
                    className="btn btn-color-four my-1" 
                    type="button" 
                    data-toggle="modal" 
                    data-target="#UpdateUserModal"
            >Update Profile</button>
 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
             <h2>My Current Events</h2>
         ):(
            <h2>You Have not created an event yet...</h2>
         )}
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                CurrentEvents && CurrentEvents.map(event => (
                    
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
                    </div>
                </div>
                    </div>
                </div>
            
            ))}

            </div>

            {JoinedEvents && JoinedEvents.length ? (
             <h2>My Joined Events</h2>
         ):(
            <h2>You Have not joined an event yet...</h2>
         )}
            
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
        </>
    )
}

export default Dashboard;


/*





      {userData.avatar && (
        <div>
        <img alt="not fount" width={"150px"} src={URL.createObjectURL(userData.avatar)} />
        </div>
      )}


      */