import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import UpdateProfile from '../components/UpdateProfile';
import Profile from './Profile';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

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
            <Profile username={userData.username} />

            <div className="container">
          <div className="row align-items-md-stretch">
            <div className="col">
            <button onClick={toggleUpdateProfile} 
                    className="btn btn-color-four my-1" 
                    type="button" 
                    data-toggle="modal" 
                    data-target="#UpdateUserModal"
            >Update Profile</button>
            </div>
            </div>
        </div>

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
        </>
    )
}

export default Dashboard;