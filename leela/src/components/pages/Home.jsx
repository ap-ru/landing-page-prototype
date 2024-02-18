import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div>
      <div className="page">
          <div className="cover">
            <h1>A smarter way to purchase.</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div className="login-btn">Login</div>

            <p className="text">
                <>Forgot your password? Click here.</>
                <br></br>
                <>
                  <>Don't have an account? </>
                  <Link to="/usertypeselection">Join our community. </Link>
                </>
            </p>
          </div>
      </div>
    </div>
  );
};