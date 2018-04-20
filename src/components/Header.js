import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
    render() {
        const HeaderWrapper = styled.div`
            background: url("../images/hero-background.jpg") no-repeat;
            background-size: cover;
        `;

        const Container = styled.div`
            max-width: 1200px;
            padding: 150px 30px;
            margin: 0 auto;
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
        `;

        const SubTitle = styled.h2`
            font-family: "Open Sans", sans-serif;
            font-size: 45px;
            color: #fff;
            margin: 0;
            font-weight: 700;
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
