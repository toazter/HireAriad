import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class RoleCards extends Component {
    render() {
        return (
            <li className="RoleCards">
                <NavLink to={this.props.roles}>{this.props.roles}</NavLink>
            </li>
        );
    }
}

export default RoleCards;
