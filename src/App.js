import React, {Component} from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import VisitHistory from "./History/VisitHistory";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import Preferences from "./Preferences/Preferences";
import List from "./MassList/List";
import LeftNav from "./leftBanner/LeftNav";
import RightBanner from "./rightBanner/RightBanner";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <div className="content">
                        <LeftNav/>
                        <Route exact path="/" component={List}/>
                        <Route path="/history" component={VisitHistory}/>
                        <Route path="/paymentInfo" component={PaymentInfo}/>
                        <Route path="/preferences" component={Preferences}/>
                        <RightBanner/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
