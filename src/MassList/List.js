import React, { Component } from 'react';
import Massuse from "../Massuses/Massuse";
import './List.css';

class List extends Component {
    render() {
        return (
            <div className="list">
                <Massuse
                    icon="../icons/Profile1.jpg"
                    name="Becky Example"
                    service1="Sample Service: 60$/Hr"
                    service2="Sample Service: 40$/Hr"
                    service3="Sample Service: 60$/Hr"
                    timeFrame1="Available: M - F 12PM - 8PM"
                    timeFrame2="Available: SAT - SUN 3PM - 6PM"
                />
                <Massuse
                    icon="../icons/Profile2.jpg"
                    name="Heather Example"
                    service1="Sample Service: 60$/Hr"
                    service2="Sample Service: 40$/Hr"
                    service3="Sample Service: 60$/Hr"
                    timeFrame1="Available: M - F 12PM - 8PM"
                    timeFrame2="Available: SAT - SUN 3PM - 6PM"
                />
                <Massuse
                    icon="../icons/Profile3.jpg"
                    name="Tom Example"
                    service1="Sample Service: 60$/Hr"
                    service2="Sample Service: 40$/Hr"
                    service3="Sample Service: 60$/Hr"
                    timeFrame1="Available: M - F 12PM - 8PM"
                    timeFrame2="Available: SAT - SUN 3PM - 6PM"
                />
                <Massuse
                    icon="../icons/Profile4.jpg"
                    name="Tina Example"
                    service1="Sample Service: 60$/Hr"
                    service2="Sample Service: 40$/Hr"
                    service3="Sample Service: 60$/Hr"
                    timeFrame1="Available: M - F 12PM - 8PM"
                    timeFrame2="Available: SAT - SUN 3PM - 6PM"
                />
                <Massuse
                    icon="../icons/Profile5.jpg"
                    name="Sam Example"
                    service1="Sample Service: 60$/Hr"
                    service2="Sample Service: 40$/Hr"
                    service3="Sample Service: 60$/Hr"
                    timeFrame1="Available: M - F 12PM - 8PM"
                    timeFrame2="Available: SAT - SUN 3PM - 6PM"
                />
            </div>
        );
    }
}

export default List;
