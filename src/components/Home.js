import React, { Component } from "react";

// Components
import Intro from "./Intro";
import RoleCards from "./RoleCards";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Intro />
                <ul>
                    {Object.keys(this.props.roles).map((roles, key) => (
                        <RoleCards key={key} index={key} roles={roles} />
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default Home;
