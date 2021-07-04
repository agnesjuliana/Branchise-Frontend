import React from "react";
import SideBar from "../components/SideBar";
import "../css/Franchise.css"
import FranchiseCard from "../components/FranchiseCard";

export default function Page() {
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
                            <FranchiseCard pict="1eEW3NGao92_zxXQGMaFkZgK8VEwU19K1" name="Chacha Coffe"/>
                        </div>
                    </div>
                </>
            </SideBar>
        </>
    )
}