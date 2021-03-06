import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Device } from "./GlobalStyles";
import ReactGA from "react-ga";

class RoleCards extends Component {
    handleClick() {
        ReactGA.event({
            category: "Navigation",
            action: "Clicked Link"
        });
    }

    render() {
        const Card = styled.li`
            display: inline-block;
            list-style-type: none;
            text-align: center;
            background: #fa4c00;
            transition: background 0.15s ease-in;
            flex-basis: 25%;
            border: 10px solid #f5f5f5;

            @media ${Device.md} {
                flex-basis: 33%;
            }
            @media ${Device.sm} {
                flex-basis: 50%;
            }
            &:hover {
                background: #000;
            }
            a {
                font-family: "Montserrat", sans-serif;
                font-size: 18px;
                color: #fff;
                text-transform: uppercase;
                text-decoration: none;
                font-weight: 700;
                padding: 40px 0;
                display: block;
                letter-spacing: 0.025em;
                @media ${Device.sm} {
                    font-size: 16px;
                    padding: 25px 0;
                }
            }
        `;

        return (
            <Card>
                <Link
                    to={this.props.roles}
                    onClick={() => {
                        this.handleClick();
                    }}
                >
                    {this.props.roles}
                </Link>
            </Card>
        );
    }
}

export default RoleCards;
