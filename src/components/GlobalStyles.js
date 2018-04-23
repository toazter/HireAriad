import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    padding: 0 30px;
    margin: 0 auto;
`;

const size = {
    xs: "425px",
    sm: "767px",
    md: "1024px",
    lg: "1440px"
};

export const Device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`
};
