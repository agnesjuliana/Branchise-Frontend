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
                                            <h4 className="priceText"><strong>Rp 1.000.000</strong></h4>

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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur lacus tincidunt tortor dignissim bibendum sed eu nulla. Curabitur fermentum porta velit, sed auctor mi condimentum eu. Nunc auctor pharetra neque, vel mollis est viverra eu. Duis sollicitudin congue scelerisque. Phasellus rhoncus et lorem eu imperdiet. Pellentesque non mollis est. Maecenas imperdiet arcu eros, ut pulvinar dui tincidunt ac. Praesent bibendum mi sed odio tincidunt, eget interdum augue euismod. Nulla fringilla nisi erat, nec rhoncus nibh luctus et. Proin sit amet ultricies dui. Mauris ultrices sapien eu quam condimentum pharetra. Mauris volutpat at velit non porttitor. Suspendisse et quam porttitor, sagittis sem non, vestibulum lorem. Morbi nec nibh sollicitudin, laoreet ligula vitae, laoreet neque.

                                        Nam in interdum mi, a sagittis lacus. Aliquam nisi tellus, commodo eu orci a, eleifend dapibus justo. Sed ac lectus sapien. Morbi libero massa, vehicula ac viverra vel, gravida non mi. Fusce non erat dapibus, tincidunt sapien non, consequat diam. Duis eget gravida nisl, eu scelerisque neque. Vivamus ut lobortis nisi. Curabitur orci felis, sollicitudin id orci vitae, dignissim rhoncus lorem. Donec scelerisque suscipit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum leo ac interdum sagittis. Suspendisse et fringilla felis. Curabitur varius aliquet porttitor.

                                        Fusce non posuere libero. In efficitur ut dui sed congue. Nulla interdum nisi vulputate, tincidunt ante vitae, venenatis orci. Integer auctor fermentum odio, eu tempor purus. Fusce condimentum eros sed justo elementum viverra. Praesent eu lorem posuere, imperdiet nisi eu, cursus dui. Suspendisse convallis sapien pulvinar lacinia iaculis. Suspendisse dictum consequat condimentum. Nulla risus ex, sodales at metus vel, finibus porttitor odio. Integer sem urna, pretium sit amet magna ac, gravida luctus dui. Integer dignissim varius ligula, et auctor arcu pulvinar non.</p>
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