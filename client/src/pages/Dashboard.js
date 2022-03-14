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


            <div>
            <p>Name: {userData.username}</p>
            <p>Avatar (in text): {userData.avatar}</p>
            <p>Here's my bio: {userData.bioText}</p>
            <p>My favoriate cuisine: {userData.favoriteCuisine}</p>

            

        </div>

            
        </>
    )
}

export default Dashboard;