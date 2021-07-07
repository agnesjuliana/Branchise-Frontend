import React from 'react'

export default class HistoryCard extends React.Component {
    render() {
        return (
            <div className="row my-2">
                <div className="col-1 align-self-center">
                    <span class={"iconify "+this.props.arrowDirect} data-inline="false" data-icon={this.props.dataIcon}></span>
                </div>
                <div className="col-4 align-self-center">
                    <h5>{this.props.name}</h5>
                    <h7>{this.props.arrow}</h7>
                </div>
                <div className="col-3 flex align-self-center">
                    <h7 className="textThin"><span class={"iconify "+this.props.color} data-inline="false" data-icon="akar-icons:circle-fill" />Bahan Baku</h7>
                </div>
                <div className="col-2 flex align-self-center">
                    <h7 className="textThin">{this.props.time}</h7>
                </div>
                <div className="col-2 flex align-self-center">
                    <h7 className="textThin">{this.props.howmuch}</h7>
                </div>
            </div>
        )
    }
}