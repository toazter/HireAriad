import React from "react";
import styled from "styled-components";

const Title = () => {
    const TitleText = styled.div`
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

    return (
        <TitleText>
            <h1>{this.props.title}</h1>
        </TitleText>
    );
};

export default Title;
