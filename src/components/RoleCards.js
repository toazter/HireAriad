import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Device } from "./GlobalStyles";

class RoleCards extends Component {
    render() {
        const Card = styled.li`
            display: inline-block;
            list-style-type: none;
            text-align: center;
            background: #fa4c00;
            transition: background 0.15s ease-in;
            flex-grow: 1;
            flex-basis: calc(32% - 10px);
            margin: 10px;
            @media ${Device.sm} {
                flex-basis: 100%;
            }
            &:hover {
                background: #000;
            }
            a {
                font-family: "Montserrat", sans-serif;
                font-size: 24px;
                color: #fff;
                text-transform: uppercase;
                text-decoration: none;
                font-weight: 700;
                padding: 40px 0;
                display: block;
                letter-spacing: 0.025em;
                @media ${Device.sm} {
                    font-size: 20px;
                    padding: 25px 0;
                }
            }
        `;

        return (
            <Card>
                <Link to={this.props.roles}>{this.props.roles}</Link>
            </Card>
        );
    }
}

export default RoleCards;
