import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../css/LandingPage.css"
export default class NavBar extends Component {
    render() {
        return (
            
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <div className="col-2">
                            <img src="https://drive.google.com/uc?id=124Ml5xHZY9uGH9DZUjmh5iUYkO0iYXdb" alt="logo" width="150" class="d-inline-block align-text-top" />
                        </div>
                        <div className="col-8">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav mx-auto">
                                    <a className="nav-link active" aria-current="page" href="#Header">About</a>
                                    <a className="nav-link" href="#Why">Service</a>
                                    <a className="nav-link" href="#">Contact</a>
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-2">
                            <div className="navbar-nav mx-auto">
                                <button type="button" className="btn btn-primary loginregis"><Link className="loginregis" to="/Login">Sign In</Link></button>
                                <div className="space"></div>
                                <button type="button" className="btn btn-outline-primary" ><Link className="loginregis2" to="/register">Sign Up</Link></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
            
        )
    }
}