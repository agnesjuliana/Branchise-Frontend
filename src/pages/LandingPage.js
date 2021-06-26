// import React from 'react'
import "../css/LandingPage.css"
import WhyCard from "../components/WhyCard"
import ListCard from "../components/Listcard"
import NavBar from "../components/NavBar"

export default function page() {

    const logo = [
        { source: "1QKM2oHdU35utbhjc2Ky2Go0CVh77i31z", alt: "logo1" },
        { source: "1QKM2oHdU35utbhjc2Ky2Go0CVh77i31z", alt: "logo2" },
        { source: "1QKM2oHdU35utbhjc2Ky2Go0CVh77i31z", alt: "logo3" },
        { source: "1QKM2oHdU35utbhjc2Ky2Go0CVh77i31z", alt: "logo4" },
        { source: "1QKM2oHdU35utbhjc2Ky2Go0CVh77i31z", alt: "logo5" },
    ]

    return (
        <>  
        <NavBar/>
            <div className="row justify-content-center baseContainer">
                <div className="col-10">

                    {/* header start */}
                    <div className="row titleHeader align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="textField">
                                <h1 className="titleGreeting">Senang bertemu denganmu User</h1>
                                <h1 className="titleMain"><b>Temukan Waralaba,<br />Mulai Bisnismu!</b></h1>
                                {/* <h6 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6> */}
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 align-item-center justify-content-center">
                            <img alt="header" className="imageContainerHeader" src="https://drive.google.com/uc?id=187kg4QjjCJ0K-jonWrbl5SG15GIzTQPX" />
                            <div className="imageShadow" />
                        </div>
                    </div>
                    {/* header end */}


                    {/* start break */}
                    <div className="row breakContainer align-items-center justify-content-center">
                        {logo.map(item => (
                            <div className="col-2">
                                <img className="logoBreak" src={"https://drive.google.com/uc?id=" + item.source} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                    {/* end break */}

                    {/* why title start */}
                    <div className="row breakContainer align-items-end">
                        <div className="textField">
                            <h4 className="engSubtitle">WHY FRANCHISE?<br /></h4>
                            <h1 className="subtitle">Kenapa harus waralaba?</h1>
                        </div>
                    </div>
                    {/* why title end */}

                    {/* why start */}
                    <div className="row whyContainer justify-content-center">
                        <div className="col-lg-5 col-md-12 imageContainerWhy">
                                <img alt="why" className="imageWhy" src="https://drive.google.com/uc?id=1guUX2rtRH2tf1VHLtTF6de3uLNYXEQrL" />
                                <div className="imageShadowWhy" />
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="row justify-content-end">
                                <WhyCard number="1" title="Modal Kecil" className="fas fa-dollar-sign iconCardWhy">
                                    Dengan skala usaha yang sama, anda akan membutuhkan dana yang lebih kecil
                                    ketimbang memulai usaha sendiri
                                    dari nol.
                                </WhyCard>
                                <WhyCard number="2" title="Produk Dikenal" className="fas fa-glass-cheers iconCardWhy">
                                    Waralaba membuat anda tidak perlu membangun branding produk dari 0.
                                    Produk yang diwaralabakan sudah banyak dikenal.
                                </WhyCard>
                            </div>
                            <div className="row justify-content-end">
                                <WhyCard number="3" title="Terorganisir" className="fas fa-boxes iconCardWhy">
                                    Tidak memerlukan banyak pengalaman bisnis.
                                    Waralaba akan memberikan pengarahan penuh terhadap bisnis.
                                </WhyCard>
                                <WhyCard number="4" title="Peluang Sukses" className="fas fa-award iconCardWhy">
                                    Pelaku bisnis waralaba memiliki peluang
                                    sukses lebih cepat daripada memulai usaha dari 0.
                                </WhyCard>
                            </div>
                        </div>
                    </div>
                    {/* why end */}

                    {/* list title start */}
                    <div className="row breakContainer align-items-end">
                        <div className="textField">
                            <h4 className="engSubtitle">WHICH ONE?<br /></h4>
                            <h1 className="subtitle">Daftar waralaba yang mana?</h1>
                        </div>
                    </div>
                    {/* list title end */}

                    {/* List start */}
                    <div className="row listContainer">
                        <ListCard title="Purple Coffe" price="1000000" member="170" image="1zN6EQZKBgVfGeXsCDltygQFt25z8LmXR" />
                    </div>
                    {/* List end */}


                </div>

                <div className="row footerContainer">
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </>
    )
}