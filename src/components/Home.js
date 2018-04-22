import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "./GlobalStyles";

// Components
import Intro from "./Intro";
import RoleCards from "./RoleCards";

class Home extends Component {
    render() {
        const CardList = styled.ul`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0 0 40px 0;
            padding: 0;
            margin: 0 -10px 40px;
        `;

        return (
            <React.Fragment>
                <Intro />
                <Container>
                    <CardList>
                        {Object.keys(this.props.roles).map((roles, key) => (
                            <RoleCards key={key} index={key} roles={roles} />
                        ))}
                    </CardList>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;
