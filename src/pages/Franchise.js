import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import "../css/Franchise.css"
import { Link } from "react-router-dom";

import axios from "axios"
import { base_url, franchise_image_url } from "../config"

export default function Page() {

    const [data, setData] = useState([])
    const [values, setValues] = useState({
        name: "",
        image: "",
        description: "",
        category: "",
        price:""
    })

    // const [modalInfo, setModalInfo] = useState(false)

    useEffect(() => {
        getData()
        console.log(data)
    }, [])

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // Axios operation
    const getData = () => {
        let url = base_url + "/franchise"
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const infoTriger = (item) => {
        setValues({
            ...values,
            "name": item.name,
            "image":item.image,
            "description":item.description,
            "category":item.category,
            "price":item.price
        })
    }

    const buy = () => {
        localStorage.setItem("franchise", JSON.stringify(values))
        window.location = "/profile"
    }

    return (
        <>
            <SideBar>
                <>
                    <div className="row justify-content-center">
                        <div className="col-8 titleContainer">
                            <h1>Cari Franchise Kamu!</h1>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control search" placeholder="Search your franchise" aria-label="Username" aria-describedby="basic-addon1" />
                                <span className="input-group-text searchIcon" id="basic-addon1"><span class="iconify" data-icon="akar-icons:search" data-inline="false" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="franchiseContainer">
                        <h4>Beverage</h4>
                        <div className="row">
                            {data.map(item => (
                                // <FranchiseCard pict={item.image} name={item.name} item={item}/>
                                <div className="col-lg-3 col-md-6 my-2">
                                    <div className="card franchiseCard">
                                        <img className="franchiseImage" src={franchise_image_url + item.image} />
                                        <div className="overlay" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>infoTriger(item)}>
                                            <div className="textFranchise">{item.name}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content modalCard">
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <img className="franchiseImage" src={franchise_image_url + values.image} />
                                        </div>
                                        <div className="col-lg-7">
                                            <h4>{values.name}</h4>
                                            <h7>{values.description}</h7>
                                            <h4><strong>Rp {values.price}</strong></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onClick={()=>buy()}>Beli Franchise!</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </>
            </SideBar>
        </>
    )
}