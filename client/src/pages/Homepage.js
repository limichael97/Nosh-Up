import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import AddEvent from '../components/AddEvent';
import SingleEvent from './SingleEvent';
import EventsPage from './EventsPage';
import { Modal, Button } from 'react-bootstrap';
import SearchEvent from './SearchEvent';


const HomePage = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const toggleLogin = () => {
    setIsLoginOpen(true);
    handleShow();
  }
  const toggleSignUp = () => {
    setIsSignUpOpen(true);
    handleShow();
  }


  return (
    <>
      <section className="py-5 text-center hero-1">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="text-light">Nosh Up</h1>
            <p className="lead text-light">Find new friends, discover new restaurants, eat delicious meals.</p>
            <p>
              <button onClick={toggleSignUp} className="btn btn-color-one" type="button" data-toggle="modal" data-target="#signUpModal">Get Started</button>
            </p>
          </div>
        </div>
      </section>

      <main>
        <div className="album py-5 bg-light">
          <div>
            <div className="container">
              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 color-four">Good Food Tastes Better with Good Friends</strong>
                      <h3 className="mb-0">Find Friends</h3>
                      {/* <div className="mb-1 text-muted">Nov 12</div> */}
                      <p className="card-text mb-auto">Never eat alone again with <span className="color-two">Nosh Up</span>, an easy way to find your perfect foodie match.<br />
                        <br />Meet. Eat. No strings attached!</p>
                    </div>
                    <div className="col-auto d-none d-lg-block featured-img-1">

                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col-auto d-none d-lg-block featured-img-2">

                    </div>
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 color-four">Gathering Place</strong>
                      <h3 className="mb-0">Invite Fellow Noshers</h3>
                      {/* <div className="mb-1 text-muted">Nov 11</div> */}
                      <p className="mb-auto">Schedule an event specifying the cuisine and how many fellow <span className="color-two">Noshers</span> you want to eat with  or join an exising event.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* logged out, click on login button, modal has close
                once logged in, login turns into logout */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  {/* <Modal.Title>Sign Up!</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                  {isLoginOpen && (
                    <Login onClose={toggleLogin} />
                  )}
                  {isSignUpOpen && (
                    <SignUp onClose={toggleSignUp} />
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

            <section className="py-5 text-center hero-2 mb-4">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="text-light">Nosh Up</h1>
                  <p className="lead text-light">Find new friends, discover new restaurants, eat delicious meals.</p>
                  <p>
                    {/* <a href="/" className="btn btn-color-one my-2" data-toggle="modal" data-target="#loginModal">Get Started</a> */}
                    <button onClick={toggleSignUp} className="btn btn-color-one" type="button" data-toggle="modal" data-target="#signUpModal">Get Started</button>
                  </p>
                </div>
              </div>
            </section>
            <div className="container">
              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 color-four">Be Yourself</strong>
                      <h3 className="mb-0">Create a Profile</h3>
                      {/* <div className="mb-1 text-muted">Nov 12</div> */}
                      <p className="card-text mb-auto">Start planning your next meal with new friends. Sign up and navigate to your Dashboard. Create your simple profile and plan an event or visit the Events page to join events other <span className="color-one">Noshers</span> are hosting.</p>
                    </div>
                    <div className="col-auto d-none d-lg-block featured-img-3">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default HomePage;