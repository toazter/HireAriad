import React, { Component } from "react";
import PeopleCards from "./PeopleCards";

class People extends Component {
    render() {
        return (
            <React.Fragment>
                {Object.keys(this.props.people).map((person, key) => (
                    <PeopleCards
                        key={key}
                        name={this.props.people[person].name}
                        title={this.props.people[person].title}
                        phone={this.props.people[person].phone}
                        linkedin={this.props.people[person].linkedin}
                        resume={this.props.people[person].resume}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default People;
