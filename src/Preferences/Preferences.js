import React, {Component} from 'react';
import "./Preferences.css"

class Preferences extends Component {
    render() {
        return (
            <div className="preferences">
                <h1>Preferences</h1>
                <div>Contact Preference: Email</div>
                <div>Phone: 123-456-7891</div>
            </div>
        );
    }
}

export default Preferences;
