// import React from 'react'
import "../css/LandingPage.css"
import WhyCard from "../components/WhyCard"
import ListCard from "../components/Listcard"
import NavBar from "../components/NavBar"
import React from "react"

export default function Page() {

    const logo = [
        { source: "1KqReHnKKiAs1aEyfvB4tyiMGeMNs1M9r", alt: "logo1" },
        { source: "1KqReHnKKiAs1aEyfvB4tyiMGeMNs1M9r", alt: "logo2" },
        { source: "1KqReHnKKiAs1aEyfvB4tyiMGeMNs1M9r", alt: "logo3" },
        { source: "1KqReHnKKiAs1aEyfvB4tyiMGeMNs1M9r", alt: "logo4" },
        { source: "1KqReHnKKiAs1aEyfvB4tyiMGeMNs1M9r", alt: "logo5" },
    ]

    let product = [
        { title: "Purple Coffe", price: "5.000.000", member: "170", image: "1zN6EQZKBgVfGeXsCDltygQFt25z8LmXR" },
        { title: "Sweet Watermellon", price: "3.500.000", member: "91", image: "1eEW3NGao92_zxXQGMaFkZgK8VEwU19K1" },
        { title: "Kopi Bear", price: "8.000.000", member: "93", image: "1j6Fpxk06GphM-qExwGaWyQPUMnrTxYLM" },
        { title: "Boba Nana", price: "4.500.000", member: "120", image: "1grOGPw4Rvl9YrN8UHowtZXiD26XoiaBa" },
    ]


    const [values, setValues] = React.useState({
        name: "",
        email: "",
        telp: "",
        message: "",
    })

    const formContact = [
        { label: "Nama", val: "name", theValue: values.name },
        { label: "Email", val: "email", theValue: values.email },
        { label: "No. Telp", val: "telp", theValue: values.telp },
    ]

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const save = () =>{
        setValues({
            ...values,
            "name": "",
            "email": "",
            "telp": "",
            "message": "",

        })
    }

    return (
        <>
            <NavBar />
            <div className="row justify-content-center baseContainer">
                <div className="col-10">

                    {/* header start */}
                    <div className="row titleHeader align-items-center" id="Header">
                        <div className="col-lg-7 col-md-12">
                            <div className="textField">
                                <h1 className="titleGreeting">Senang bertemu denganmu</h1>
                                <h1 className="titleMain"><b>Temukan Waralaba,<br />Mulai Bisnismu!</b></h1>
                                <h6 className="description">Kami <b className="biru">menghubungkan</b> pemilik waralaba dengan penerima waralaba <br/> dan <b className="biru">membantu</b> kedua pihak menjalankan bisnisnya</h6>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 align-item-center justify-content-center">
                            <img alt="header" width="700px" src="https://drive.google.com/uc?id=1nzfHkJv7z1npbZFKlm1nH6HRDQxZOSF8" />
                            <div/>
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
                    <div className="row breakContainer align-items-end" id="Why">
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
                                <p className="space"></p>
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
                                <p className="space"></p>
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
                        {product.map(item => (
                            <ListCard title={item.title} price={item.price} member={item.member} image={item.image} />
                        ))}
                    </div>
                    {/* List end */}

                    {/* title form start */}
                    <div className="row formTitle">
                        <h1 className="mx-auto">Pelajari Lebih Lanjut</h1>
                    </div>
                    {/* title form end */}

                    {/* form start */}
                    <div className="row formContact">
                        <div className="formCard mx-auto py-5 px-4">
                            {formContact.map(item => (
                                <div class="mb-3 row">
                                    <label class="col-sm-2 col-form-label">{item.label}</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" value={item.theValue} onChange={handleChange(item.val)} />
                                    </div>
                                </div>
                            ))}

                            <div class="mb-3 row">
                                <label class="col-sm-2 col-form-label">Pesan Tambahan</label>
                                <div class="col-sm-10">
                                    <textarea type="text" class="form-control" value={values.message} onChange={handleChange("message")} />
                                </div>
                            </div>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary" type="button" onClick={save}>Kirim</button>
                            </div>
                        </div>
                    </div>
                    {/* form end */}


                </div>

                <div className="row footerContainer justify-content-center" id="Contact">
                    <div className="col-10">
                        <div className="row footerContent align-items-center justify-content-center">
                            <div className="col-lg-3 col-md-12 contact">
                                <img alt="branchise" className="footerImage" src="https://drive.google.com/uc?id=1dCSFpdn0mGpJ-bUeQwv-6qYe3j96m78i" />
                            </div>
                            <div className="col-lg-3 col-md-12 contact">
                                <h4 ><b>GET IN TOUCH</b></h4>
                                <h5 >dearpartner@branchise</h5>
                                <h5 >0813-40997471</h5>
                            </div>
                            <div className="col-lg-6 col-md-12 mx-auto contact">
                                <div className="row justify-content-end">
                                    <div className="col-12">
                                        <h1 className="cta"><b>Let's join & Collaborate</b></h1>
                                        <h4>Every great work is started from a nice conversation & a cup of coffee. Share your business problem with us and let us be a part of the solution.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}