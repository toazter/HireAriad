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
        `;

        const NavLi = styled.li`
            list-style-type: none;
            display: inline-block;
        `;

        const StyledLink = styled(NavLink)`
            color: #fff;
        `;

        return (
            <NavBar>
                <Container>
                    <NavUl>
                        <NavLi>
                            <NavLink
                                to="/"
                                className="StyledLink"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </NavLi>
                        {Object.keys(this.props.roles).map((roles, key) => (
                            <NavLi key={key}>
                                <NavLink
                                    key={key}
                                    to={roles}
                                    activeClassName="active"
                                >
                                    {roles}
                                </NavLink>
                            </NavLi>
                        ))}
                    </NavUl>
                </Container>
            </NavBar>
        );
    }
}

export default Nav;
