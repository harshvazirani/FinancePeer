import React, { Component } from "react";
import Home from "./home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Login State is maintained in Controlled and passed on to other components as props along with the function to modify the state.
class Controller extends Component {

    constructor() {
        super();
        this.state = { loggedIn: false };
    }

    setLoggedIn() {
        const newState = this.state;
        newState.loggedIn = true;
        this.setState(newState);
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props}
                            setLoggedIn={this.setLoggedIn.bind(this)} loggedIn={this.state.loggedIn} />}
                    />
                </div>
            </Router>
        );
    }
};
export default Controller;