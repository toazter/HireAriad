import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import base from "./base";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import People from "./components/People";

class App extends Component {
    state = {
        roles: {},
        activation: {},
        content: {},
        creative: {},
        martech: {},
        strategy: {},
        technology: {}
    };

    componentDidMount() {
        this.ref = base.syncState("roles", {
            context: this,
            state: "roles"
        });

        this.ref = base.syncState("activation", {
            context: this,
            state: "activation"
        });

        this.ref = base.syncState("content", {
            context: this,
            state: "content"
        });

        this.ref = base.syncState("creative", {
            context: this,
            state: "creative"
        });

        this.ref = base.syncState("martech", {
            context: this,
            state: "martech"
        });

        this.ref = base.syncState("strategy", {
            context: this,
            state: "strategy"
        });

        this.ref = base.syncState("technology", {
            context: this,
            state: "technology"
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Home roles={this.state.roles} />}
                        />
                        <Route
                            path="/activation"
                            render={() => (
                                <People people={this.state.activation} />
                            )}
                        />
                        <Route
                            path="/content"
                            render={() => (
                                <People people={this.state.content} />
                            )}
                        />
                        <Route
                            path="/creative"
                            render={() => (
                                <People people={this.state.creative} />
                            )}
                        />
                        <Route
                            path="/martech"
                            render={() => (
                                <People people={this.state.martech} />
                            )}
                        />
                        <Route
                            path="/strategy"
                            render={() => (
                                <People people={this.state.strategy} />
                            )}
                        />
                        <Route
                            path="/technology"
                            render={() => (
                                <People people={this.state.technology} />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
