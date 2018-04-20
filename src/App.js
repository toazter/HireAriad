import React, { Component } from "react";
import base from "./base";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
    state = {
        roles: {}
    };

    componentDidMount() {
        this.ref = base.syncState("roles", {
            context: this,
            state: "roles"
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main roles={this.state.roles} />
            </div>
        );
    }
}

export default App;
