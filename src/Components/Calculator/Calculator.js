import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput'

function calculateToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function calculateToFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) return ''
    
    const outcome = convert(temperature);
    return outcome
}

class App extends Component {
    state = {
        tempereature: '',
        scale: ''
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'c' ? tryConvert(temperature, calculateToCelsius) : temperature ;
        const farenheit = scale === 'f' ? tryConvert(temperature, calculateToFarenheit) : temperature ;

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.toFarenheit}/>
                <TemperatureInput scale='f' temperature={farenheit} onTemperatureChange={this.toCelsius}/>
            </div>
        )
    }

    toFarenheit = (temperature) => {
        this.setState({temperature, scale: 'f'})
    }

    toCelsius = (temperature) => {
        this.setState({temperature, scale: 'c'})        
    }
}

export default App;