import React, { useState } from "react";
import "../css/login.css"



import axios from "axios"
import { base_url } from "../config"


export default function Register() {

    const [values, setValues] = useState({
        email: "",
        password: "",
        role: "",
        message: "",
        logged: "false"
    });

    const regist = event => {
        let role = (values.role).toLowerCase()
        let data = {
            email: values.email,
            password: values.password
        }

        if (role === "customer"){
            let url_customer = base_url + "/customer/login"
            axios.post(url_customer, data)
            .then(response=>{
                setValues({...values,"logged":response.data.logged})
                if (values.logged){
                    setValues({...values,"role":"siswa"})
                    let user = response.data.data
                    let token = response.data.token
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("token", token)
                    localStorage.setItem("role", "customer")
                    window.location = "/beranda"
                }else {
                    console.log("belum masuk gais")
                }
            })
            .catch(error => console.log(error))
        }else{
            let url_founder = base_url + "/founder/login"
            axios.post(url_founder, data)
            .then(response=>{
                setValues({...values,"logged":response.data.logged})
                if (values.logged){
                    setValues({...values,"role":response.data.data.role})
                    // console.log(values)
                    let user = response.data.data
                    let token = response.data.token
                    let fixRole = (response.data.data.level).toLowerCase()
                    localStorage.setItem("user", JSON.stringify(user))
                    localStorage.setItem("token", token)
                    localStorage.setItem("role", fixRole)
                    window.location = "/beranda"
                }else {
                    console.log("belum masuk gais")
                }
            })
            .catch(error => console.log(error))
        }
    }

    const form = [
        { label: "Email", type: "email", ph: "Enter Email", val: "email", value: values.email },
        { label: "Password", type: "password", ph: "Enter Password", val: "password", value: values.password },
    ]

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values)
    };


    return (
        <div>
            <div className="row registWrap">
                <div className="col-lg-7 dekor">
                    <div className="row justify-content-center">
                        <img className="mx-4 dekorImage" src="https://drive.google.com/uc?id=1ZBPC4GHwM79Nx6NsYxLUp9Lm2RwFU9VJ" alt="dekor" />
                    </div>
                </div>
                <div className="col-lg-5 form-login">
                    <div>
                        <form className="form-login">
                            <b><h3>login</h3></b>
                            <b><h1>Selamat Datang!</h1></b>
                            <h3>Anda Login sebagai <span className="blueText">{values.role}</span></h3>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="customer" onClick={handleChange("role")} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Customer
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="founder" onClick={handleChange("role")} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Founder
                                </label>
                            </div>
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

            </div>


        </div >
    );

}