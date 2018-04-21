import React, { Component } from "react";

class PeopleCards extends Component {
    render() {
        const { name, title, phone, linkedin, resume } = this.props;

        return (
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <a href={linkedin} target="_blank">
                    LinkedIn
                </a>
                {phone}
                <a href={resume}>Resume</a>
            </div>
        );
    }
}

export default PeopleCards;
