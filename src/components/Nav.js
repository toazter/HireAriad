import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./GlobalStyles";
import styled from "styled-components";

class Nav extends Component {
    render() {
        const NavBar = styled.div`
            background: #000;
        `;
        const NavUl = styled.ul`
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 10px 0;
        `;
        const NavLi = styled.li`
            list-style-type: none;
            display: inline-block;
            flex-grow: 1;
            text-align: center;
        `;
        const StyledLink = styled(NavLink)`
            font-family: "Open Sans", sans-serif;
            font-size: 12px;
            color: #fff;
            margin: 10px;
            display: inline-block;
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.25s ease-in;
            &.active {
                color: #fa4c00;
            }
            &:hover {
                color: #fa4c00;
            }
        `;

        return (
            <NavBar>
                <Container>
                    <NavUl>
                        <NavLi>
                            <StyledLink activeClassName="" to="/">
                                Home
                            </StyledLink>
                        </NavLi>
                        {Object.keys(this.props.roles).map((roles, key) => (
                            <NavLi key={key}>
                                <StyledLink
                                    key={key}
                                    to={`/${roles}`}
                                    activeClassName="active"
                                >
                                    {roles}
                                </StyledLink>
                            </NavLi>
                        ))}
                    </NavUl>
                </Container>
            </NavBar>
        );
    }
}

export default Nav;
