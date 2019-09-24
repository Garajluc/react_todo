import React, { Component } from 'react';

const scaleTypes = {
    c: 'Celsius',
    f: 'Farenheit'
}

class TemperatureInput extends Component {
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <div>
                <label>Insert temperature in {scaleTypes[scale]} :
                    <div>
                        <input type='text' value={temperature} onChange={this.handleChange}/>
                    </div>
                </label>
            </div>
        )
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }
}

export default TemperatureInput;