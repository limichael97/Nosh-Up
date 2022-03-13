import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import AddEvent from '../components/AddEvent';
import SingleEvent from './SingleEvent';
import { Modal, Button } from 'react-bootstrap';


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
      <SingleEvent />
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
                      <strong className="d-inline-block mb-2 color-four">World</strong>
                      <h3 className="mb-0">Featured post</h3>
                      <div className="mb-1 text-muted">Nov 12</div>
                      <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
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
                      <strong className="d-inline-block mb-2 color-four">Design</strong>
                      <h3 className="mb-0">Post title</h3>
                      <div className="mb-1 text-muted">Nov 11</div>
                      <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* logged out, click on login button, modal has close
                once logged in, login turns into logout */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
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
            <AddEvent />

            <div className="container">
              <div className="row mb-2">
                <div className="col-md-12">
                  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 color-four">World</strong>
                      <h3 className="mb-0">Featured post</h3>
                      <div className="mb-1 text-muted">Nov 12</div>
                      <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
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