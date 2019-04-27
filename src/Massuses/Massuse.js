import React, {Component} from 'react';
import './Massuse.css';

class Massuse extends Component {
    render() {
        return (
            <div className="Massuse">
                <img className="icon" src={this.props.icon} alt="Profile Icon"/>
                <h1 className="name">{this.props.name}</h1>
                <div className="services">
                    <div>{this.props.service1}</div>
                    <div>{this.props.service2}</div>
                    <div>{this.props.service3}</div>
                </div>
                <div className="timeFrames">
                    <div>{this.props.timeFrame1}</div>
                    <div>{this.props.timeFrame2}</div>
                </div>
                <button
                    className="bookButton"
                >
                    Book Now
                </button>
            </div>
        );
    }
}

Massuse.Props = {
    icon: "",
    name: "",
    service1: "",
    service2: "",
    service3: "",
    timeFrame1: "",
    timeFrame2: ""
};

export default Massuse;
