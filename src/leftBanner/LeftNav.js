import React, {Component} from 'react';
import './LeftNav.css';
import {NavLink, HashRouter} from "react-router-dom";
import Upcoming from "./Upcoming";


class LeftNav extends Component {
    render() {
        return (
            <div className="leftNav">
                <h1 className="title">Massage Lyfe</h1>
                <div className="profile">
                    <img className="icon" src="../icons/account.png" alt="Account Icon"/>
                    <div className="user">Sample User</div>
                </div>
                <HashRouter>
                    <ul className="links">
                        <li><NavLink to="/">Massuses Near You</NavLink></li>
                        <li><NavLink to="/history">Visit History</NavLink></li>
                        <li><NavLink to="paymentInfo">Payment Information</NavLink></li>
                        <li><NavLink to="preferences">Preferences</NavLink></li>
                    </ul>
                </HashRouter>
                <Upcoming/>
            </div>
        );
    }
}

export default LeftNav;
