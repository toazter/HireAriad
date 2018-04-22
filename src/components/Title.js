import React from "react";
import styled from "styled-components";
import { Container } from "./GlobalStyles";

const Title = props => {
    const Title = styled.h1`
        font-family: "Montserrat", sans-serif;
        font-size: 34px;
        color: #333;
        text-transform: uppercase;
        margin: 65px 0 50px;
        text-align: center;
    `;

    const path = window.location.pathname.replace(/^\/|\/$/g, "");

    return (
        <Container>
            <Title>Meet the {props.roles[`${path}`]} team</Title>
        </Container>
    );
};

export default Title;
