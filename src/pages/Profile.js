import "../css/Transaksi.css"
import { Link } from "react-router-dom"

export default function page() {

    let user = JSON.parse(localStorage.getItem("user"))


    const profile = [
        { label: "Nama Lengkap", type: "text", id: "nama", value: user.name },
        { label: "NIK", type: "text", id: "nik", value: "352022552102550065" },
        { label: "Alamat", type: "text", id: "alamat", value: user.city },
        { label: "Email", type: "email", id: "email", value: user.email },
        { label: "Nomor Telepon", type: "telp", id: "telp", value: "082102452035" },
    ]

    return (
        <>
            <div className="wrap">
                <div className="row progresslineContainer">

                </div>
                <div className="row transaksiBody justify-content-center my-3">
                    <div className="col-10">
                        <div className="row">
                            <div className="profileCard">
                                <div className="row justify-content-center">
                                    <h4>Lengkapi Profile</h4>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 align-self-center">
                                        <img className="profileImageSquare" src="https://drive.google.com/uc?id=1sAPKacHekJ7rmjzFppX3SoNCRzWxe43i" />
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="profileWrap">
                                            {profile.map(item => (
                                                <div class="row my-2">
                                                    <div className="col-4 align-self-center">
                                                        <label for={item.id} class="form-label">{item.label}</label>
                                                    </div>

                                                    <div className="col-7 mx-2 align-self-center">
                                                        <input type={item.type} class="form-control formProfile" id={item.id} value={item.value} aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-2 align-self-center">
                                        <div class="my-4">
                                            <h6>Foto Diri (Close Up)</h6>
                                            <button type="button" className="btn profileUploadBtn">Upload</button>
                                        </div>
                                        <div class="my-4">
                                            <h6>Foto KTP</h6>
                                            <button type="button" className="btn profileUploadBtn">Upload</button>
                                        </div>
                                        <div class="my-4">
                                            <h6>Foto Memegang KTP</h6>
                                            <button type="button" className="btn profileUploadBtn">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-end my-5">
                            <button type="button" className="btn btn-primary profileNextBtn"><Link className="loginregis" to="/transaksi">Lanjut Transaksi
                            </Link></button>
                            <div className="space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}