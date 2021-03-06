import React, { Component } from "react";
import { Container } from "./GlobalStyles";
import PeopleCards from "./PeopleCards";
import styled from "styled-components";
import Nav from "./Nav";
import Title from "./Title";
import ButtonScrollTop from "./ButtonScrollTop";

class People extends Component {
    render() {
        const People = styled.div`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0 0 40px 0;
            padding: 0;
            margin: 0 -10px 40px;
        `;

        return (
            <div>
                <Nav roles={this.props.roles} />
                <Title roles={this.props.roles} />
                <Container>
                    <People>
                        {Object.keys(this.props.people)
                            .reverse()
                            .map((item, key) => (
                                <PeopleCards
                                    key={key}
                                    img={this.props.people[item].image}
                                    name={this.props.people[item].name}
                                    title={this.props.people[item].title}
                                    linkedin={this.props.people[item].linkedin}
                                    needjob={this.props.people[item].needJob}
                                    contract={this.props.people[item].contract}
                                />
                            ))}
                    </People>
                </Container>
                <ButtonScrollTop />
            </div>
        );
    }
}

export default People;
