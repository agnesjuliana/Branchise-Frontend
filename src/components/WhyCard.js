import React from 'react'

export default class WhyCard extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-5 col-md-12">
                <div className="circle">
                    <h2 className="textCircle">{this.props.number}</h2>
                </div>
                <div className="cardWhy">
                    <div className="iconBoxCardWhy"><i className={this.props.className} /></div>
                    <h4 className="titleCardWhy"><b> {this.props.title} </b></h4>
                    <h6 className="descCardWhy">
                        {this.props.children}
                    </h6>
                </div>
                </div>
            </>
        )
    }
}