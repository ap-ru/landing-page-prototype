import React from "react";
import "./SellerSignUp.css";
import { Link } from "react-router-dom";


export const Seller = () => {
  return (
    <div>
      <div className="page">
          <div className="cover">
            <h1>A smarter way to purchase.</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div className="login-btn">Sign Up</div>

            <p className="text">
                  <>Already have an account? </>
                  <Link to="/">Login. </Link>
            </p>
          </div>
      </div>
    </div>
  );
};