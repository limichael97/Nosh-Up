import React from 'react';

const Login = () => {
 
return (
<div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="loginModalLabel">Welcome Back Nosher!</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <form className="">
        <div className="form-floating mb-3">
          <input type="email" className="form-control rounded-4" id="floatingInput" name="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control rounded-4" name="floatingPassword" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-color-one" type="submit">Log In</button>
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

export default Login;