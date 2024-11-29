import React from "react";
import { Link } from "react-router-dom";
import './Freelancer.css';
const Login=()=>{
    return(
        <div className="wrapper">
      <h1 className="wrapper-header">Looking For a Freelancer? </h1>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="remember-forgot">
                    <p>Don't Remember? Forgot Password  </p>
                </div>
                <button className="btn-primary" type="submit"><Link to='/'>Login</Link></button>
                {/* <div>
                <Link path='/Auth'>Register</Link>
                </div> */}
                <div className="register-link">
                   <br/> <p>Doesn't Have An Account? <Link to='/Auth'>Signup</Link></p>
                </div>
            </form>
         </div>
    );
}
export default Login;