import React, { useState } from "react";
import "../css/login.css"
import { Link } from "react-router-dom";



import axios from "axios"
import { base_url } from "../config"


export default function Register() {

    const [values, setValues] = useState({
        name: "",
        alamat:"",
        telp:"",
        nik:"",
        npwp:"",
        email: "",
        password: "",
        role: "",
        message: ""
    });

    const regist = event => {
        let role = (values.role).toLowerCase
        let data = {
            name: values.name,
            alamat: values.alamat,
            telp: values.telp,
            nik: values.nik,
            npwp: values.npwp,
            email: values.email,
            password: values.password
        }

        let url_founder = base_url + "/founder"
        axios.post(url_founder, data)
            .then(response => {
                setValues({ ...values, "message": "Login Sukses" })
                console.log(response)
                window.confirm("Berhasil Mendaftar, silahkan lanjut ke proses login")
                window.location = "/login"
            })
            .catch(error => console.log(error))
    }

    const form = [
        { label: "Name", type: "text", ph: "Nama Lengkap", val: "name", value: values.name },
        { label: "Alamat", type: "text", ph: "Alamat Rumah", val: "alamat", value: values.alamat },
        { label: "Nomor Telpon", type: "text", ph: "Nomor Telepon", val: "telp", value: values.telp },
        { label: "NIK", type: "number", ph: "NIK", val: "nik", value: values.nik },
        { label: "NPWP", type: "text", ph: "NPWP", val: "npwp", value: values.npwp },
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
                            <h3>Anda mendaftar sebagai <span className="blueText">Founder</span></h3>
                            <button type="button" className="btn btn-outline-primary" ><Link to="/register/Customer">Saya ingin mendaftar sebagai "Customer"</Link></button>
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