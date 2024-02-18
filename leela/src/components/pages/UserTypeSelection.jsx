import React from "react";
import "./UserTypeSelection.css"
import { Link } from "react-router-dom";

export const UserTypeSelection = () => {
    return (
        <div>
            <div className="page">
                <div className="cover">
                    <h1>A smarter way to purchase.</h1>

                    <p>Thanks for joining us! Before we start - what kind of user are you?</p>
                    
                    <div className="btn-list">
                        <div className="btn"><Link className="type-button" to="/consumer">Consumer</Link></div>
                        <div className="btn"><Link className="type-button" to="/seller">Seller</Link></div>
                        <div className="btn"><Link className="type-button" to="/affiliate">Affiliate</Link></div>
                    </div>

                    <p className="text">
                        <>Already have an account? </> 
                        <Link to="/">Login. </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
