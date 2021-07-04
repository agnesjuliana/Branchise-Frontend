import React, { Component } from "react";
import "../css/login.css"
import { DropdownButton, Dropdown } from 'react-bootstrap';
export default class Login extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr className="form-login">
                            <td className="dekor">
                                <div className="dekor">
                                    <img src="https://drive.google.com/uc?id=1ybUjcsVN0T4gg65Z26ejKMbNTkYwUiw9" alt="dekor" />
                                </div>
                            </td>
                            <td className="form-login">
                                <div>
                                    <form className="form-login">
                                        <b><h3>Login</h3></b>
                                        <b><h1>Selamat Datang!</h1></b>
                                        <br />
                                        <DropdownButton id="dropdown-basic-button" title="Siapa Kamu?">
                                            <Dropdown.Item href="#/action-1">Franchisor</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Franchisee</Dropdown.Item>
                                        </DropdownButton>
                                        <br />
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                        <p className="forgot-password text-right">
                                            Forgot <a href="#">password?</a>
                                        </p>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div >
        );
    }
}