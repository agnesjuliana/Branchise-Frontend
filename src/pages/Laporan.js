import React from "react";
import SideBar from "../components/SideBar";
import "../css/Laporan.css"
import ReportCard from "../components/ReportCard";

export default function Page() {
    return (
        <>
            <SideBar>
                <>
                    <div className="row">
                        <div className="col-lg-7 mx-3">
                            <h1>Laporan Keseharian</h1>
                            <h3 className="dateReport">9 July, 2021</h3>

                            <div className="reportCardWrap">
                                <ReportCard title="Milk Base" pict="1NoAbwBH0IYJMLaJl1yRDxIFnkna-bkO6" count="13" color="blue"/>
                                <ReportCard title="Coffe Base" pict="1HmAZfVRm7tMd3ANWrSeNsa0Z-rVtnr8q" count="50" color="purple"/>
                                <ReportCard title="Soda" pict="1Vswg2ipb97Qaln7i-0dbkW1XwmDEBj-P" count="20" color="red"/>
                                <ReportCard title="Juice" pict="1QSbdlEFjkn7-_RDlJwLs0N72g36D1v4V" count="80" color="yellow"/>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-3">
                            <div className="kalenderCard">
                                <h5 className="">Progress Target</h5>
                                <img className="targetImg" src="https://drive.google.com/uc?id=10wkCCy0Mlib_Ep38Q7ODVHsisFFt0kZm" />
                                <img className="kalenderImg" src="https://drive.google.com/uc?id=1Xdr-0XKBt5WVXI0pkhpVMona5DlZesbD" />
                            </div>
                        </div>
                    </div>
                </>
            </SideBar>
        </>
    )
}