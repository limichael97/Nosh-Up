/*import React, { useState } from 'react';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
var i = 0;

const SignUp = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    i++;
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log("change made "+i);
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    console.log("Sign Up!");
    event.preventDefault();

     
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(userFormData);
      const { data } = await addUser({
        variables: { ...userFormData}});
      console.log(data);
      Auth.login(data.addUser.token);

    } catch (err) {
      console.error(err);
      //setShowAlert(true); 
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
 
return (
    <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModal" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="signUpModalLabel">Hello Nosher!</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className=""  onSubmit={handleFormSubmit}>
            <div className="form-floating mb-3">
              <input 
                type="text" 
                className="form-control rounded-4" 
                //id="floatingInput" 
                placeholder="Name" 
                name="username"
                onChange={handleInputChange}
                value={userFormData.username}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control rounded-4" 
               // id="floatingInput" 
                placeholder="name@example.com" 
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type="password" 
                className="form-control rounded-4" 
               // id="floatingPassword" 
                placeholder="Password" 
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button 
              className="w-100 mb-2 btn btn-lg rounded-4 btn-color-one" 
              type="submit" 
              variant="success"
              disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            >Sign up</button>
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-color-four" data-dismiss="modal">Close</button> 
        </div>
      </div>
    </div>
  </div>
    );
}

export default SignUp;*/

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    console.log("here is change");
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Signup;

