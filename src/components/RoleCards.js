import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoleCards extends Component {
    render() {
        return (
            <li className="RoleCards">
                <Link to={this.props.roles}>{this.props.roles}</Link>
            </li>
        );
    }
}

export default RoleCards;
