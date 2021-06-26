import React from 'react'

export default class ListCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className="card listCard align-items-center">
                    <img src={"https://drive.google.com/uc?id="+this.props.image} className="card-img-top" alt="brand1" />
                    <h4 className="cardTitle">{this.props.title}</h4>
                    <div className="row priceCard">
                        <div className="col">
                            <h6 className="pricelist">Rp{this.props.price}</h6>
                        </div>
                        <div className="col">
                            <h6 className="member">{this.props.member} Member</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}