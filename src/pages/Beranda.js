import React from "react";
import SideBar from "../components/SideBar";
import "../css/Beranda.css"
import HistoryCard from "../components/HistoryCard";

export default function Page() {
    let user = JSON.parse(localStorage.getItem("user"))

    const [values] = React.useState({
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
    });

    // if(values.role==="customer"){
    return (
        <>
            <SideBar>
                <>
                    <div className="row gap-4">
                        <div className="col-lg-4 mx-3">
                            <h1>Overview</h1>

                            <div className="dompetContainer">
                                <h4>E-Dompet</h4>
                                <div className="card dompetCard px-4">
                                    <div className="my-auto">
                                        <h1 className="my-auto">Rp 5.000.000,00</h1>
                                        <h6>Kamu mendapatkan 63% pemasukan</h6>
                                    </div>
                                </div>
                                {/* <img className="dompetBack" src="https://drive.google.com/uc?id=1CIHSeuLP5BDiU0KLPZahWY0LyesRZWsU" /> */}
                            </div>

                            <div className="pemasukanContainer">
                                <h4>Pemasukan</h4>
                                <div className="card pemasukanCard px-4">
                                    <div className="my-auto">
                                        <h5 >Penjualan</h5>
                                        <h3 >Rp 3.000.000</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="pengeluaranContainer">
                                <h4>Pengeluaran</h4>
                                <div className="card pengeluaranCard">
                                    <div className="d-flex">
                                        <div className="p-2 flex-fill align-self-center">
                                            <img className="pengeluaranImage" src="https://drive.google.com/uc?id=1tieFyfXBNSQ6oL-uWO1rNKa-JVH9LOZf" />
                                        </div>
                                        <div className="p-2 flex-fill align-self-center">
                                            <h5><b>Kebutuhan</b></h5>
                                            <h5 >500.000 tersisa dari 1.000.000</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card pengeluaranCard">
                                    <div className="d-flex">
                                        <div className="p-2 flex-fill align-self-center">
                                            <img className="pengeluaranImage" src="https://drive.google.com/uc?id=1tieFyfXBNSQ6oL-uWO1rNKa-JVH9LOZf" />
                                        </div>
                                        <div className="p-2 flex-fill align-self-center">
                                            <h5><b>Tagihan</b></h5>
                                            <h5 >500.000 tersisa dari 1.000.000</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7 mx-3">
                            <div className="progresContainer">
                                <h4>Progress</h4>
                                <img className="progressImg" src="https://drive.google.com/uc?id=1l-8Ve1tW9-vEmuwZd_160tVQHCbiqtTy" />

                            </div>

                            <div className="kategoriContainer">
                                <h4>Kategori Pengeluaran</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="card bahanbaku">
                                            <div className="d-flex">
                                                <div className="p-2 flex-fill align-self-center">
                                                    <img className="kategoriImage" src="https://drive.google.com/uc?id=1bTJo0nvTYlLr89DNLIjmBVOgrV1BHTzN" />
                                                </div>
                                                <div className="p-2 flex-fill align-self-center">
                                                    <h7><b>Bahan Baku</b><br /></h7>
                                                    <h7 >Rp 200.000</h7>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card stan">
                                            <div className="d-flex">
                                                <div className="p-2 flex-fill align-self-center">
                                                    <img className="kategoriImage" src="https://drive.google.com/uc?id=1te-mYTypdcNp6uD-s8NUkkNs_6e64T5D" />
                                                </div>
                                                <div className="p-2 flex-fill align-self-center">
                                                    <h7><b>Stan</b><br /></h7>
                                                    <h7 >Rp 100.000,00</h7>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card promosi">
                                            <div className="d-flex">
                                                <div className="p-2 flex-fill align-self-center">
                                                    <img className="kategoriImage" src="https://drive.google.com/uc?id=1znM8YocS2Yf4-JLWpd_GFMzdM3x5diNs" />
                                                </div>
                                                <div className="p-2 flex-fill align-self-center">
                                                    <h7><b>Promosi</b><br /></h7>
                                                    <h7 >RP 400.000,00</h7>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="historyContainer">
                                <h4>Transaksi Terakhir</h4>
                                <h5>3 Juli 2021</h5>

                                <HistoryCard
                                    dataIcon="bi:arrow-down-right-square"
                                    name="Susu fullcream"
                                    arrowDirect="arrowOut"
                                    arrow="keluar"
                                    color="colorBlue"
                                    time="10.00"
                                    howmuch="-Rp 75.000"
                                />
                                <HistoryCard
                                    dataIcon="bi:arrow-up-right-square"
                                    name="Order"
                                    arrowDirect="arrowIn"
                                    arrow="Masuk"
                                    color="colorDarkblue"
                                    time="11.30"
                                    howmuch="+Rp 25.000"
                                />
                                <HistoryCard
                                    dataIcon="bi:arrow-down-right-square"
                                    name="Instagram Ads"
                                    arrowDirect="arrowOut"
                                    arrow="keluar"
                                    color="colorRed"
                                    time="10.00"
                                    howmuch="-Rp 75.000"
                                />

                                {/* <span class="iconify" data-inline="false" data-icon="bi:arrow-up-right-square"></span> */}
                            </div>
                        </div>


                    </div>
                </>
            </SideBar>
        </>
    )
    // }else{
    //     window.alert("Anda Tidak terdaftar sebagai CUSTOMER, silahkan mendaftar atau masuk sebagai customer terlebih dahulu")
    //     window.location="/"
    // }

}