import React, { Component } from "react";
import styled from "styled-components";
import { Device } from "./GlobalStyles";
import ReactGA from "react-ga";

class PeopleCards extends Component {
    handleClick() {
        ReactGA.event({
            category: "Navigation",
            action: `Clicked ${this.props.name}'s LinkedIn Profile`
        });
    }

    render() {
        const Img = styled.img`
            width: 100%;
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
        `;
        const Card = styled.div`
            max-width: 33%;
            flex-basis: 33%;
            border: 10px solid #f5f5f5;
            padding: 20px;
            background: #fff;
            @media ${Device.md} {
                max-width: 33%;
                flex-basis: 33%;
            }
            @media ${Device.sm} {
                max-width: 100%;
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
            transition: background 0.25s ease-in;
            &:hover {
                background: #000;
            }
        `;

        const { img, name, title, linkedin, needjob, contract } = this.props;

        return (
            <Card
                className={
                    `${!needjob ? "employed" : ""}` +
                    " " +
                    `${contract ? "on-contract" : ""}`
                }
            >
                <Img src={img} alt={`This is a photograph of ${name}.`} />
                <Name>{name}</Name>
                <Title>{title}</Title>
                <LinkedIn
                    href={linkedin}
                    target="_blank"
                    onClick={() => {
                        this.handleClick();
                    }}
                >
                    Visit LinkedIn
                </LinkedIn>
            </Card>
        );
    }
}

export default PeopleCards;
