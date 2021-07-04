import React from "react";
import SideBar from "../components/SideBar";
import "../css/Central.css"

export default function Page() {
    return (
        <>
            <SideBar>
                <>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="centralTitle">boba nana</h1>
                            <div class="card centralCard">
                                <img src="https://drive.google.com/uc?id=1grOGPw4Rvl9YrN8UHowtZXiD26XoiaBa" class="centralImage" alt="central" />
                                <div class="card-body">
                                    <h5 class="card-title">MEMBER</h5>
                                </div>
                            </div>
                            <div className="centralFormWrap">
                                <div className="centralInfo">
                                    <h4>Almat Pusat</h4>
                                    <input type="text" className="form-control centralForm" value="Jl Kertajaya III Malang"></input>
                                </div>
                                <div className="centralInfo">
                                    <h4>Owner</h4>
                                    <input type="text" className="form-control centralForm" value="Aga Talitha Ilham"></input>
                                </div>
                                <div className="centralInfo">
                                    <h4>Contact Person</h4>
                                    <input type="text" className="form-control centralForm" value="082-440521798"></input>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="trainingContainer">
                                <div className="centerTitle">
                                    <h1>Training Center</h1>
                                </div>
                                <div className="videoContainer">
                                    <h4>Brewing</h4>
                                    <iframe className="videoTraining" src="https://www.youtube.com/embed/An6LvWQuj_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="videoContainer">
                                    <h4>Buble Tea</h4>
                                    <iframe className="videoTraining" src="https://www.youtube.com/embed/nD2k199_HBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            </SideBar>
        </>
    )
}