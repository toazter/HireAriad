import React, { Component } from "react";
import styled from "styled-components";
import { Device } from "./GlobalStyles";

class PeopleCards extends Component {
    render() {
        const Img = styled.img`
            max-width: 100%;
        `;
        const Card = styled.div`
            flex-grow: 1;
            flex-basis: calc(32% - 10px);
            margin: 10px;
            padding: 20px;
            background: #fff;
            @media ${Device.sm} {
                flex-basis: 100%;
            }
        `;
        const Name = styled.h3`
            font-family: "Open Sans", sans-serif;
            font-size: 18px;
            color: #333;
            font-weight: 400;
            margin: 15px 0 5px;
        `;
        const Title = styled.p`
            font-family: "Montserrat", sans-serif;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 20px;
        `;
        const LinkedIn = styled.a`
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            color: #fff;
            background: #fa4c00;
            width: 100%;
            font-weight: 800;
            padding: 10px 5px;
            text-align: center;
            display: block;
            text-decoration: none;
            border-radius: 4px;
        `;
        const Portfolio = styled.a``;

        const { img, name, title, linkedin, portfolio, needjob } = this.props;

        return (
            <Card className={`${!needjob ? "" : "employed"}`}>
                <Img src={img} />
                <Name>{name}</Name>
                <Title>{title}</Title>
                <LinkedIn href={linkedin} target="_blank">
                    Visit LinkedIn
                </LinkedIn>
                <Portfolio />
            </Card>
        );
    }
}

export default PeopleCards;
