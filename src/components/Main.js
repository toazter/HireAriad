import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PeopleCards from "./PeopleCards";

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/activation" component={PeopleCards} />
            <Route path="/schedule" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Main;
