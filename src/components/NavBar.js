import React from 'react'
export default class NavBar extends React.Component {
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
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
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
                            <button className="btn me-2" type="button">Sign In</button>
                                <button className="btn btn-primary" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}