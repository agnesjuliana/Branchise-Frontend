import $ from "jquery"
import "../css/SideBar.css"
import React from "react";
import { Link } from 'react-router-dom';

// import AkunSaya from '../pages/AkunSaya'
// import Beranda from '../pages/Beranda'
// import Central from '../pages/Central'
// import Franchise from '../pages/Franchise'
// import Laporan from '../pages/Laporan'



export default class SideBar extends React.Component {
    componentDidMount() {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }

    render() {
        const side = [
            { path: "/beranda", title: "Beranda", icon:"bi:grid-1x2-fill" },
            { path: "/franchise", title: "Cari Franchise", icon:"fluent:search-square-24-filled" },
            { path: "/laporan", title: "Laporan", icon:"majesticons:file-report" },
            { path: "/central", title: "Central", icon:"ion:storefront-sharp" },
            { path: "/akunsaya", title: "Akun Saya", icon:"bx:bxs-user-pin" },
        ]

        return (
            <>
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <div id="sidebar-wrapper">
                        <ul class="sidebar-nav">
                            <li class="sidebar-brand">
                                <Link className="nav-button" to="/"><img className="nav-logo" src="https://drive.google.com/uc?id=13jcExvhKKyXjvQ0Pz3opvOGPPdOQkqHA" /></Link>
                            </li>
                            <div className="sideBtnWrap">
                                {side.map(item => (
                                    <li className="sideBtn">
                                        <a href="#"><Link className="nav-button btnLink" to={item.path}>
                                        <span className="iconify" data-icon={item.icon} data-inline="false"/> {item.title}</Link></a>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>
                    {/* <!-- /#sidebar-wrapper --> */}


                    {/* <!-- Page Content --> */}
                    <div id="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /#page-content-wrapper --> */}


                </div>
                {/* <!-- /#wrapper --> */}


            </>

        )

    }

}