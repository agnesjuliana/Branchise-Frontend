import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <div className="col-2">
                            <img src="https://drive.google.com/uc?id=1QKM2oHdU35utbhjc2Ky2Go0CVh77i31z" alt="" width="150" class="d-inline-block align-text-top" />
                        </div>
                        <div className="col-8">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav mx-auto">
                                    <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to="/login">About</Link></a>
                                    <a className="nav-link" href="#">Service</a>
                                    <a className="nav-link" href="#">Contact</a>
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-2">
                            <div className="navbar-nav mx-auto">
                                <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to="/Login">Sign In</Link></a>
                                <a className="nav-link active" aria-current="page" href="#"><Link className="nav-button" to="/register">Sign Up</Link></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}