import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import base from "./base";
import ReactGA from "react-ga";

// Components
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./components/Home";
import People from "./components/People";
import Footer from "./components/Footer";

ReactGA.initialize("UA-65581388-2");

function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

class App extends Component {
    state = {
        roles: {},
        leadership: {},
        accounts: {},
        content: {},
        creative: {},
        martech: {},
        strategy: {},
        technology: {},
        finance: {},
        project: {}
    };

    componentDidMount() {
        this.ref = base.syncState("roles", {
            context: this,
            state: "roles"
        });

        this.ref = base.bindToState("leadership", {
            context: this,
            state: "leadership",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("accounts", {
            context: this,
            state: "accounts",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("content", {
            context: this,
            state: "content",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("creative", {
            context: this,
            state: "creative",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("martech", {
            context: this,
            state: "martech",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("strategy", {
            context: this,
            state: "strategy",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("technology", {
            context: this,
            state: "technology",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("finance", {
            context: this,
            state: "finance",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });

        this.ref = base.bindToState("project", {
            context: this,
            state: "project",
            asArray: true,
            queries: {
                orderByChild: "needJob"
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <BrowserRouter onUpdate={fireTracking}>
                    <ScrollToTop>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Home roles={this.state.roles} />}
                            />
                            <Route
                                path="/leadership"
                                render={() => (
                                    <People
                                        people={this.state.leadership}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/accounts"
                                render={() => (
                                    <People
                                        people={this.state.accounts}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/content"
                                render={() => (
                                    <People
                                        people={this.state.content}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/creative"
                                render={() => (
                                    <People
                                        people={this.state.creative}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/martech"
                                render={() => (
                                    <People
                                        people={this.state.martech}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/strategy"
                                render={() => (
                                    <People
                                        people={this.state.strategy}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/technology"
                                render={() => (
                                    <People
                                        people={this.state.technology}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/finance"
                                render={() => (
                                    <People
                                        people={this.state.finance}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                            <Route
                                path="/project"
                                render={() => (
                                    <People
                                        people={this.state.project}
                                        roles={this.state.roles}
                                    />
                                )}
                            />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;
