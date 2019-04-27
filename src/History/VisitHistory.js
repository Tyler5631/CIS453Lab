import React, {Component} from 'react';
import './VisitHistory.css';


class VisitHistory extends Component {
    render() {
        return (
            <div className="visitHistory">
                <h1>Previous Visits</h1>
                <div>Becky Example: APR 5th - 1PM: 40$</div>
                <div>Tom Example: APR 8th - 2PM: 80$</div>
                <div>Tina Example: APR 10th - 6PM: 100$</div>
            </div>
        );
    }
}

export default VisitHistory;
