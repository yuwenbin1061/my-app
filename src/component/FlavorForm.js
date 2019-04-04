import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value= 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.state.value} onChange={this.handleChange}>
                <label></label>
            </form>
        )
    }
}