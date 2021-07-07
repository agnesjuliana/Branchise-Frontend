import React, { useState } from "react";
import "../css/login.css"
import { Link } from "react-router-dom";



import axios from "axios"
import { base_url } from "../config"


export default function Register() {

    const [values, setValues] = useState({
        name: "",
        username: "",
        city: "",
        email: "",
        password: "",
        role: "",
        message: ""
    });

    const regist = event => {
        let role = (values.role).toLowerCase
        let data = {
            name: values.name,
            city: values.city,
            email: values.email,
            password: values.password
        }

        let url_customer = base_url + "/customer"
        axios.post(url_customer, data)
            .then(response => {
                setValues({ ...values, "message": "Berhasil Registrasi" })
                console.log(response)
                window.confirm("Berhasil Mendaftar, silahkan lanjut ke proses login")
                window.location = "/login"
            })
            .catch(error => console.log(error))
    }

    const form = [
        { label: "Name", type: "text", ph: "Nama Lengkap", val: "name", value: values.name },
        { label: "Kota", type: "text", ph: "Kota Kamu", val: "city", value: values.city },
        { label: "Email", type: "email", ph: "Enter Email", val: "email", value: values.email },
        { label: "Password", type: "password", ph: "Enter Password", val: "password", value: values.password },
    ]

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values)
    };


    return (
        <div>
            <div className="row registWrap">
                <div className="col-lg-5 form-login">
                    <div>
                        <form className="form-login">
                            <b><h3>Register</h3></b>
                            <b><h1>Selamat Datang!</h1></b>
                            <h3>Anda mendaftar sebagai <span className="blueText">Customer</span></h3>
                            <button type="button" className="btn btn-outline-primary" ><Link to="/registerfounder">Saya ingin mendaftar sebagai "Founder"</Link></button>
                            <h1><br /></h1>

                            {form.map(item => (
                                <div className="form-group">
                                    <label>{item.label}</label>
                                    <input type={item.type} className="form-control" placeholder={item.ph} value={item.value} onChange={handleChange(item.val)} />
                                </div>
                            ))}


                            <button type="submit" className="btn btn-primary btn-block" onClick={ev => regist(ev)}>Submit</button>

                        </form>
                    </div>
                </div>
                <div className="col-lg-7 dekor">
                    <div className="row justify-content-center">
                        <img className="mx-4 dekorImage" src="https://drive.google.com/uc?id=1ZBPC4GHwM79Nx6NsYxLUp9Lm2RwFU9VJ" alt="dekor" />
                    </div>
                </div>
            </div>


        </div >
    );

}