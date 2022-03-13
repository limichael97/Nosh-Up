import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Auth from '../utils/auth';

const Navbar = () => {

    const [isLoginOpen, setIsLoginOpen] = useState(true); 
    const [isSignUpOpen, setIsSignUpOpen] = useState(true); 

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
       // console.log(isLoginOpen);
    }
    const toggleSignUp= () => {
        setIsSignUpOpen(!isSignUpOpen);
        console.log(isSignUpOpen);
    }

    return (
        <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-color-two">
        <div className="container-fluid">
          <a className="navbar-brand ms-1 mb-1" href="/"><span className="material-icons-outlined me-2 adjust-icons">storefront</span>Nosh Up</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
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

                {isLoginOpen && (
                    <Login onClose={toggleLogin} />
                )} 

                {isSignUpOpen && (
                    <SignUp onClose={toggleSignUp} />
                )} 
                
            </div>
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />  */}
              {Auth.loggedIn() ? (
                  <button className="btn btn-color-one  me-2" type="button"><a className="nav-link active" href="/" onClick={Auth.logout}>Logout</a></button>
                ) : (
                  <>
                    <button onClick={toggleLogin} className="btn btn-color-four me-2" type="button" data-toggle="modal" data-target="#loginModal">Login</button>
                    <button onClick={toggleSignUp} className="btn btn-color-one" type="button" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
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