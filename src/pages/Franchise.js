import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import "../css/Franchise.css"
import FranchiseCard from "../components/FranchiseCard";

import axios from "axios"
import { base_url } from "../config"

export default function Page() {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
        console.log(data)
    }, [])

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
                                <FranchiseCard pict={item.image} name={item.name} />
                            ))}
                        </div>
                    </div>
                </>
            </SideBar>
        </>
    )
}