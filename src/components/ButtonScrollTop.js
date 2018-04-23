import React, { Component } from "react";
import styled from "styled-components";
import { Container, Device } from "./GlobalStyles";

class ButtonScrollTop extends Component {
    render() {
        const ExtendContainer = styled(Container)`
            text-align: center;
        `;
        const Button = styled.button`
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            color: #000;
            font-weight: 800;
            background: #fff;
            border: none;
            display: none;
            text-align: center;
            padding: 10px 50px;
            margin: 0 0 50px;
            border: none;
            border-radius: 4px;
            @media ${Device.sm} {
                display: inline-block;
            }
        `;
        return (
            <ExtendContainer>
                <Button
                    onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                >
                    Scroll to Top
                </Button>
            </ExtendContainer>
        );
    }
}

export default ButtonScrollTop;
