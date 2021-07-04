import React from "react";
import SideBar from "../components/SideBar";

export default function Page() {
    return (
        <>
            <SideBar>
                <>
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Overview</h1>
                        <h3></h3>
                    </div>
                    <div className="col-lg-8">
                        <h3>Progress</h3>
                    </div>
                </div>
                </>
            </SideBar>
        </>
    )
}