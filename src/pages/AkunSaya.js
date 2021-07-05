import React from "react";
import SideBar from "../components/SideBar";
import "../css/AkunSaya.css"

export default function Page() {
    let user = JSON.parse(localStorage.getItem("user"))

    const profile = [
        { label: "NIK", type: "text", id: "nik", value: "352022552102550065" },
        { label: "Nama Lengkap", type: "text", id: "nama", value: user.name },
        { label: "Alamat", type: "text", id: "alamat", value: user.city },
        { label: "Email", type: "email", id: "email", value: user.email },
        { label: "Nomor Telepon", type: "telp", id: "telp", value: "082102452035" },
    ]


    const [values] = React.useState({
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
    });

    if (values.role === "customer") {
        return (
            <>
                <SideBar>
                    <>
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <h1>Profile Anda</h1>
                                <div className="card profileCard">
                                    <div className="d-flex">
                                        <div className="p-2 flex-fill align-self-center">
                                            <img className="profileImage" src="https://drive.google.com/uc?id=1sAPKacHekJ7rmjzFppX3SoNCRzWxe43i" />
                                        </div>
                                        <div className="p-2 flex-fill align-self-center">
                                            <h4 className="userName"><b>{user.name}</b></h4>
                                            <h5 className="textUpperCase">boba nana</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="profileWrap">
                                    {profile.map(item => (
                                        <div class="mb-3">
                                            <label for={item.id} class="form-label">{item.label}</label>
                                            <input type={item.type} class="form-control formProfile" id={item.id} value={item.value} aria-describedby="emailHelp" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-6 mx-5">
                                <div className="btnWrap">
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn profileBtn">Surat Perjanjian</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className="btn profileBtn">Laporan</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn profileBtn">Hubungi Owner</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className="btn profileBtn">Pengaturan</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="lokasiWrap">
                                    <div class="...">
                                        <label for="lokasi" class="form-label">Lokasi Franchise</label>
                                        <input type="text" class="form-control formProfile" id="lokasi" value="Jalan Wijaya Kusuma 5, Malang" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="btnUploadWrap">
                                        <h6>Foto KTP</h6>
                                        <button type="button" className="btn uploadBtn">Upload</button>
                                    </div>
                                    <div class="btnUploadWrap">
                                        <h6>Foto Diri</h6>
                                        <button type="button" className="btn uploadBtn">Upload</button>
                                    </div>
                                    <div class="btnUploadWrap">
                                        <h6>Foto Tempat Franchise</h6>
                                        <button type="button" className="btn uploadBtn">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </SideBar>
            </>
        )
    } else {
        window.alert("Anda Tidak terdaftar sebagai CUSTOMER, silahkan mendaftar atau masuk sebagai customer terlebih dahulu")
        window.location = "/"
    }
}