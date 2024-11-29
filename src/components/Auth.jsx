import React from "react";
import { Link } from "react-router-dom";
import './Freelancer.css';
export default function Auth () {
  return (
    <div className="wrapper">
    <div className="Auth-form-container">
      <h1 className="Auth-header">Sign Up With RECU-FREE</h1>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Sign-Up</h1>

          <div className="form-group mt-3">
            <input
              type="text" placeholder="First Name"
              className="form-control mt-1" required/>
            <br />
            <br />
            <input
              type="text" placeholder="Last Name"
              className="form-control mt-1"required />
          </div>
          <div className="form-group mt-3">
            <input
              type="email" placeholder="Email"
              className="form-control mt-1"required/>
          </div>
          <div className="form-group mt-3">
            <input
              type="password" placeholder="Password"
              className="form-control mt-1" 
              required/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"><Link to='/Login'>Submit</Link></button>
            {/* <Link path='/Login'>Login</Link> */}
          </div>
          <div className="register-link" style={{textAlign:'Center'}}>
            <p>Already User ?  <Link to='/Login'>Login</Link></p>
          </div>
          
        </div>
      </form>
    </div>
    </div>
  );
}

