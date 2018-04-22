import React, { Component } from "react";
import styled from "styled-components";
import { Container, Device } from "./GlobalStyles";

class Header extends Component {
    render() {
        const HeaderWrapper = styled.div`
            background: url("../images/hero-background.jpg") no-repeat;
            background-size: cover;
            padding: 80px 0;
            @media ${Device.sm} {
                padding: 50px 0;
            }
        `;

        const Divider = styled.div`
            width: 100px;
            height: 2px;
            background: #fa4c00;
            margin: 20px 0 30px;
        `;

        const Title = styled.h1`
            font-family: "Times New Roman", sans-serif;
            font-size: 30px;
            color: #fa4c00;
            margin: 0;
            font-style: italic;
            font-weight: 300;
            @media ${Device.sm} {
                font-size: 20px;
            }
        `;

        const SubTitle = styled.h2`
            font-family: "Montserrat", sans-serif;
            font-size: 45px;
            color: #fff;
            margin: 0;
            font-weight: 800;
            text-transform: uppercase;
            @media ${Device.sm} {
                font-size: 30px;
            }
        `;

        return (
            <HeaderWrapper>
                <Container>
                    <Title>Get ‘em while they’re hot!</Title>
                    <Divider />
                    <SubTitle>Ariad’s Finest</SubTitle>
                </Container>
            </HeaderWrapper>
        );
    }
}

export default Header;
