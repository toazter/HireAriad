import React, { Component } from "react";
import styled from "styled-components";

const IntroText = styled.div`
    max-width: 1200px;
    padding: 0 30px;
    margin: 40px auto;
    p {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 32px;
        color: #333;
    }
`;

const Intro = () => {
    return (
        <IntroText>
            <p>
                On Tuesday, April 17, Ariad Communications declared bankruptcy,
                suddenly shutting its doors after nearly 30 years of service.
                Over 70 passionate, award-winning marketing professionals were
                kicked to the curb, robbed of outstanding wages, packages and,
                even worse, a direct explanation from their CEO.
            </p>
            <p>
                <strong>BIG THANKS</strong> to the marketing and agency
                community for the unbelievable support you’ve shown us during
                this tough time. Your kindness and generosity is absolutely
                overwhelming.
            </p>
            <p>
                From creative and digital design to development and strategy,
                account and email marketing to PM, there are still many
                Ariadites in need of jobs! Check out our Beautiful Thinkers
                below.
            </p>
        </IntroText>
    );
};

export default Intro;
