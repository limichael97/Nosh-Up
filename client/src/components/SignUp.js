import React from 'react';

const SignUp = () => {
 
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
          <form className="">
            <div className="form-floating mb-3">
              <input type="text" className="form-control rounded-4" id="floatingInput" placeholder="Name" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-color-one" type="submit">Sign up</button>
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

export default SignUp;