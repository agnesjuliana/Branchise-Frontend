import "../css/Transaksi.css"
import { Link } from "react-router-dom"
import { base_url, franchise_image_url } from "../config"


export default function page() {

    let franchise = JSON.parse(localStorage.getItem("franchise"))


    return (
        <>
            <div className="wrap">
                <div className="row progresslineContainer">
                </div>
                <div className="row transaksiBody justify-content-center my-3">
                    <div className="col-10">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-3 my-4">
                                <div className="pickCard">
                                    <div className="row mx-1">
                                        <h4>Franchise</h4>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-lg-5 align-self-center">
                                            <img className="pickImg" src={franchise_image_url+franchise.image} />
                                        </div>
                                        <div className="col-lg-7 align-self-center">
                                            <h4>{franchise.name}</h4>
                                            <h5>Kategori <span className="kategoriText">{franchise.category}</span></h5>
                                            <h4 className="priceText"><strong>Rp {franchise.price}</strong></h4>

                                            <div className="pusatContainer my-4">
                                                <h5>Tentang Pusat</h5>
                                                <h6>Alamat : Jl in aja dulu, no.131, Kota Malang, Jawa Timur, Indonesia</h6>
                                                <h6>Contact : 0821-xxxxxxxxx</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mx-3 my-4">
                                <div className="paymentCard">
                                    <div className="row mx-1">
                                        <h4>Pembayaran</h4>
                                    </div>

                                    <div className="row mx-1">
                                        <div class="form-check col-12 my-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                <h5><strong>Transfer Bank</strong></h5>
                                            </label>
                                            <div className="row mx-2">
                                                <img className="paymentImg" src="http://4.bp.blogspot.com/-5fz-Tigy140/TcJPfmFODuI/AAAAAAAADkA/9TnZrUTE6ik/s1600/Logo_Bank_Permata.png" />

                                            </div>
                                        </div>
                                        <div class="form-check col-12 my-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                <h5><strong>Dana</strong></h5>
                                            </label>
                                            <div className="row mx-2">
                                                <img className="paymentImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png" />
                                            </div>
                                        </div>
                                        <div class="form-check col-12 my-3">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                <h5><strong>OVO</strong></h5>
                                            </label>
                                            <div className="row mx-2">
                                                <img className="paymentImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-11 mx-3 my-4">
                                <div className="syaratCard">
                                    <h4>Syarat dan Ketentuan</h4>
                                    <p>
                                        Pada hari ini, tanggal XX XXXXX XXXX, Franchisor dan Franchisee sepakat untuk mengikatkan diri dalam perjanjian kerja sama Franchise dengan menerangkan terlebih dahulu hal-hal sebagai berikut:
                                    </p>
                                    <ul>
                                        <li>Bahwa Franchisor setuju memberikan izin dan membantu Franchisee menjual produk dengan Brand Seblak DuaRR milik Franchisor di tempat Franchisee.</li>
                                        <li>Bahwa Franchisee berjanji akan mengawasi, menjaga dan mengendalikan mutu produk yang dijual serta memberikan pelayanan terbaik bagi setiap konsumen sesuai dengan standar yang ditetapkan oleh Franchisor.</li>
                                        <li>Bahwa Franchisor memberikan hak eksklusif kepada Franchisee untuk membuka 1 buah Kedai</li>
                                        <li>Franchisor memberikan izin kepada Franchisee dengan nama {franchise.name}, untuk itu Franchisee dapat menggunakan merek dan sistem secara bersamaan dengan Franchisee lainnya yang sudah diizinkan oleh Franchisor sebelumnya.</li>
                                        <li>Franchisee setuju membeli bahan bahan yang disepakati dan menjalankan serta mematuhi semua ketetapan dan persyaratan-persyaratan yang ditetapkan oleh Franchisor.</li>
                                    </ul>

                                    <p>Bahwa berdasarkan hal-hal yang telah ditetapkan di atas dengan ini Franchisor dan Franchisee sepakat untuk melaksanakan Perjanjian ini dalam bentuk kerja sama yang untuk selanjutnya disebut sebagai Perjanjian, dengan syarat-syarat dan ketentuan sebagai berikut:</p>
                                    <br/>
                                    <h5 className="text-center">Pasal 1</h5>
                                    <h5 className="text-center">Syarat Syarat</h5>
                                    <p>Franchisee menyatakan bahwa memenuhi seluruh persyaratan yang ditetapkan oleh Franchisor antara lain:</p>
                                    <ul>
                                        <li>Menyediakan biaya franchise yang harus disetor ke rekening Franchisor. Untuk detail biaya dijelaskan pada pasal 2</li>
                                        <li>Menyediakan lahan tanah atau lahan bangunan yang akan ditempati sebagai tempat berjualan</li>
                                    </ul>
                                    <a href="#">Pelajari lebih lanjut</a>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-end my-5">
                            <button type="button" className="btn btn-primary profileNextBtn"><Link className="loginregis" to="/mou">Setujui
                            </Link></button>
                            <div className="space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}