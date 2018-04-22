import React from "react";
import styled from "styled-components";
import { Container } from "./GlobalStyles";

const Intro = () => {
    const IntroText = styled.p`
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 32px;
        color: #333;
        &:first-of-type {
            margin-top: 40px;
        }
        &:last-of-type {
            margin-bottom: 40px;
        }
    `;

    return (
        <Container>
            <IntroText>
                On Tuesday, April 17, Ariad Communications declared bankruptcy,
                suddenly shutting its doors after nearly 30 years of service.
                Over 70 passionate, award-winning marketing professionals were
                kicked to the curb, robbed of outstanding wages, packages and,
                even worse, a direct explanation from their CEO.
            </IntroText>
            <IntroText>
                <strong>BIG THANKS</strong> to the marketing and agency
                community for the unbelievable support you’ve shown us during
                this tough time. Your kindness and generosity is absolutely
                overwhelming.
            </IntroText>
            <IntroText>
                From creative and digital design to development and strategy,
                account and email marketing to PM, there are still many
                Ariadites in need of jobs! Check out our Beautiful Thinkers
                below.
            </IntroText>
        </Container>
    );
};

export default Intro;
