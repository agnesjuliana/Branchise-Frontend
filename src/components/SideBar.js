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
            { path: "/beranda", title: "Beranda" },
            { path: "/franchise", title: "Cari Franchise" },
            { path: "/laporan", title: "Laporan" },
            { path: "/central", title: "Central" },
            { path: "/akunsaya", title: "Akun Saya" },
        ]

        return (
            <>
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <div id="sidebar-wrapper">
                        <ul class="sidebar-nav">
                            <li class="sidebar-brand">
                                <Link className="nav-button" to="/"><img className="nav-logo" src="https://drive.google.com/uc?id=13jcExvhKKyXjvQ0Pz3opvOGPPdOQkqHA"/></Link>
                            </li>
                            {side.map(item => (
                                <li>
                                    <a href="#"><Link className="nav-button active" to={item.path}>{item.title}</Link></a>
                                </li>
                            ))}
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