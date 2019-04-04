import React from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        )    
    }
}

export default Calculator;

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}