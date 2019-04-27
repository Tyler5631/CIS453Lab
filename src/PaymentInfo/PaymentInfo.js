import React, { Component } from 'react';
import './PaymentInfo.css';

class PaymentInfo extends Component {
    render() {
        return (
            <div className="paymentInfo">
                <h1>Your Payment Information</h1>
                <div>
                    Credit Card: 1234-5678-9101-1213
                    Address: 123 Example Street, Example Town
                </div>

            </div>
        );
    }
}

export default PaymentInfo;
