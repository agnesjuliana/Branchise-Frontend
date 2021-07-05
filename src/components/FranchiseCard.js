import React from 'react'
import { franchise_image_url } from "../config"


export default class FranchiseCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 my-2">
                <div className="card franchiseCard">
                    <img className="franchiseImage" src={franchise_image_url + this.props.pict} />
                    <div className="overlay">
                        <div className="textFranchise">{this.props.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}