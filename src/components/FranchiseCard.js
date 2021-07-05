import React from 'react'
import { franchise_image_url } from "../config"


export default class FranchiseCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 my-2">
                <div className="card franchiseCard">
                    <img className="franchiseImage" src="https://64.media.tumblr.com/211fe4ca7d8e4b79ff6f25787f7bb734/68476a66f03a1bc9-2a/s1280x1920/0eb9e946c96bf19e089ec1229ffc921275f880d1.jpg" alt="franchiseImage" />
                    <div className="overlay">
                        <div className="textFranchise">{this.props.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}