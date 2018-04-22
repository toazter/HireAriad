import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import base from "./base";
import TransitionGroup from "react-transition-group/TransitionGroup";

// Components
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./components/Home";
import People from "./components/People";
import Footer from "./components/Footer";

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

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
        finance: {}
    };

    componentDidMount() {
        this.ref = base.syncState("roles", {
            context: this,
            state: "roles",
            queries: {
                orderByChild: "id"
            }
        });

        this.ref = base.syncState("leadership", {
            context: this,
            state: "leadership"
        });

        this.ref = base.syncState("accounts", {
            context: this,
            state: "accounts"
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

        this.ref = base.syncState("finance", {
            context: this,
            state: "finance"
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <BrowserRouter>
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
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;
