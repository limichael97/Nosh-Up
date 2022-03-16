import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateProfile from '../components/UpdateProfile';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } =useQuery(QUERY_ME)
    const userData = data?.me || { avatar: '1',}
    const CurrentEvents = userData.myCurrentEvent;

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
        <div class ="container">
        <div className="row">
            <div className="card" >
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={require(`../img/avatar-${userData.avatar}.jpg`)} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title"><strong className="">User Name: {userData.username}</strong></h2>
                            <p className="card-text h3">My Bio: {userData.bioText}</p>
                            <p className="card-text h4"><small className="text-muted">My favorite cuisine: {userData.favoriteCuisine}</small></p>
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



            <h2 className="mb-4 mt-4">My Current Events</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                CurrentEvents && CurrentEvents.map(event => (
                    
            <div className="col">
                <div className="card">
                <div className="col-auto d-none d-lg-block featured-img-2"></div>
                <div className="card-body">
                    <h5 className="card-title">My Current Hosted Events</h5>
                    <p className="card-text">This card will hold the information for my current hosted events.</p>
                </div>
                </div>
            </div>
            
            ))}

            </div>

            
            <h2 className="mb-4 mt-4">My Joined Events</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">

            <div className="col">
                <div className="card">
                <div className="col-auto d-none d-lg-block featured-img-3">
                
                </div>
                <div className="card-body">
                    <h5 className="card-title">My Current Joined Events</h5>
                    <p className="card-text">This card will hold the information for my current joined events.</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <div className="col-auto d-none d-lg-block featured-img-1"></div>
                <div className="card-body">
                    <h5 className="card-title">My Current Joined Events</h5>
                    <p className="card-text">This card will hold the information for my current joined events.</p>
                </div>
                </div>
            </div>

            </div>
            </div>
        </div>
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