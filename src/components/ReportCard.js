
import React from 'react'

export default class ReportCard extends React.Component {
    render() {
        return (
            <div className={"card reportCard "+this.props.color}>
            <div className="row">
                <div className="col-10">
                    <h4 className="reportCardTitle my-2 mx-3">{this.props.title}</h4>
                    <img className="mx-3 metered" src={"https://drive.google.com/uc?id="+this.props.pict} alt="central" />
                </div>
                <div className="col-2">
                    <div className="cardCount my-2 pt-2">
                        <h3>{this.props.count}</h3>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}