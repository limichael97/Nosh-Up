import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Logo from "../img/w-logo-310.png";
import Auth from '../utils/auth';
import AddEvent from './AddEvent';
import { Modal, Button } from 'react-bootstrap';


const Navbar = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isEventOpen, setEventOpen] = useState(false)

  const [show, setShow] = useState(false);
  // const [showEvent, setEventShow] = useState(false);


  const handleClose = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setShow(false);
    setEventOpen(false);
    // setEventShow(false)
  }
  const handleShow = () => setShow(true);

  // const handleEventShow = () => setEventShow(true);

  const toggleEvent =() => {
    setEventOpen(true);
    handleShow()
  }

  const toggleLogin = () => {
    setIsLoginOpen(true);
    handleShow();
  }
  const toggleSignUp = () => {
    setIsSignUpOpen(true);
    handleShow();
  }

  return (
    // <span className="material-icons-outlined me-2 adjust-icons">storefront</span>Nosh Up
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-color-two">
        <div className="container-fluid">
          <a className="navbar-brand ms-1 mb-1" href="/"><img src={Logo} alt="Nosh Up Logo" className="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="events.html">Events</a>
              </li>
              <li className="nav-item">
                {Auth.loggedIn() ? (
                  <>
                    <a className="nav-link active" href="single-event.html">Single Event</a>
                  </>
                ) : (
                  <a className="nav-link active" href="single-event.html">Please Login</a>
                )}
              </li>
            </ul>

            <div>
              {/* logged out, click on login button, modal has close
                once logged in, login turns into logout */}
              <Modal id="modalid" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  {/* <Modal.Title>Login !</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                  {isLoginOpen && (
                    <Login onClose={toggleLogin} />
                  )}
                  {isSignUpOpen && (
                    <SignUp onClose={toggleSignUp} />
                  )}
                  {isEventOpen && (
                    <AddEvent onClose={toggleEvent} />
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

            </div>

            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />  */}
              {Auth.loggedIn() ? (
                <>
                  <button onClick={toggleEvent} className="btn btn-color-one mx-2" type="button" data-toggle="modal1" data-target="#eventModal">Add Event</button>
                  <button className="btn btn-color-one  me-2" type="button"><a className="nav-link active" href="/" onClick={Auth.logout}>Logout</a></button>
                </>


              ) : (
                <>
                  <button onClick={toggleLogin} className="btn btn-color-four me-2" type="button" data-toggle="modal" data-target="#modalid">Login</button>
                  <button onClick={toggleSignUp} className="btn btn-color-one" type="button" data-toggle="modal2" data-target="#modal2">Sign Up</button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;