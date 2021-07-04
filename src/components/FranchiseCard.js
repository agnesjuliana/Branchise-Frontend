import React from 'react'

export default class FranchiseCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className="card franchiseCard">
                    <img className="franchiseImage" src={"https://drive.google.com/uc?id="+this.props.pict} alt="franchiseImage" />
                    <div className="overlay">
                        <div className="textFranchise">{this.props.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}