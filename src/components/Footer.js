import React from "react";
import styled from "styled-components";
import { Container } from "./GlobalStyles";

const Footer = () => {
    const Footer = styled.div`
        background: #000;
    `;
    const Text = styled.p`
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        color: #f5f5f5;
        text-align: center;
        padding: 20px 0;
        margin: 0;
    `;

    return (
        <Footer>
            <Container>
                <Text>
                    Made with{" "}
                    <span role="img" aria-label="love">
                        ❤️
                    </span>{" "}
                    by a couple of former Ariadites.
                </Text>
            </Container>
        </Footer>
    );
};

export default Footer;
