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
                        <div className="col-lg-7">
                            <h1>Laporan Keseharian</h1>
                            <h3 className="dateReport">9 July, 2021</h3>

                            <div className="reportCardWrap">
                                <ReportCard title="Milk Base" pict="1NoAbwBH0IYJMLaJl1yRDxIFnkna-bkO6" count="13" color="blue"/>
                                <ReportCard title="Coffe Base" pict="1NoAbwBH0IYJMLaJl1yRDxIFnkna-bkO6" count="50" color="purple"/>
                                <ReportCard title="Soda" pict="1NoAbwBH0IYJMLaJl1yRDxIFnkna-bkO6" count="20" color="red"/>
                                <ReportCard title="Juice" pict="1NoAbwBH0IYJMLaJl1yRDxIFnkna-bkO6" count="80" color="yellow"/>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-5">

                        </div>
                    </div>
                </>
            </SideBar>
        </>
    )
}