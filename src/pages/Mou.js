import "../css/Transaksi.css"
import { Link } from "react-router-dom"

export default function page() {
    return (
        <div className="wrap">
            <div className="row progresslineContainer">

            </div>
            <div className="row transaksiBody justify-content-center align-items-center my-3">
                <div className="col-10 align-self-center my-auto">
                    <div className="mouCard ">
                        <h1>Pembelian Berhasil</h1>
                        <h5>Selamat bergabung menjadi salah satu bagian dari kami</h5>
                        <span class="iconify check" data-inline="false" data-icon="akar-icons:circle-check" />

                        <div className="row justify-content-center my-5">
                            <button type="button" className="btn btn-primary profileNextBtn"><Link className="loginregis" to="/beranda">pergi ke beranda
                            </Link></button>
                            <div className="space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}