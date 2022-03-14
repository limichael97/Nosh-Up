import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateProfile from '../components/UpdateProfile';
import Profile from './Profile';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { QUERY_SINGLE_USER } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } =useQuery(QUERY_ME)
    const userData = data?.me || {}
    const CurrentEvents = userData.myCurrentEvent;
    console.log(userData);
    console.log(CurrentEvents);

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

      

            <button onClick={toggleUpdateProfile} 
                    className="btn btn-color-four me-2" 
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


            <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                <div className="img-fluid rounded-start avatar avatar-1" ></div>
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

            <h2>My Current Events</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                CurrentEvents && CurrentEvents.map(event => (
                    
            <div className="col">
                <div className="card">
                <div className="col-auto d-none d-lg-block featured-img-2"></div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            
            ))}

            </div>

            
            <h2>My Joined Events</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">

            <div className="col">
                <div className="card">
                    
                <div className="col-auto d-none d-lg-block featured-img-1"></div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <div className="col-auto d-none d-lg-block featured-img-1"></div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>

            </div>







        </>
    )
}

export default Dashboard;