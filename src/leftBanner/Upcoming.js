import React, { Component } from 'react';
import './Upcoming.css';

class Upcoming extends Component {
    render() {
        return (
            <div className="upcoming">
                <h2>Upcoming Appointments</h2>
                <div className="appointment">Sample Name APR 4th, 1pm</div>
                <div className="appointment">Sample Name APR 8th, 4pm</div>
                <div className="appointment">Sample Name APR 14th, 6pm</div>
            </div>
        );
    }
}

export default Upcoming;
