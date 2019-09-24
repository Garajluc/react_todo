import React, { Component } from 'react';

class App extends Component {
    // Constructor
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
            isSet: true,
            name: 'Lucy'
        }
    }

    // Functions
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({ time: new Date() });
    }

    change = () => {
        this.setState((prevState) => ({
            isSet: !prevState.isSet
        }))
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }

    // Render
    render() {
        const { isSet } = this.state;
        const { time } = this.state;
        let message;
        
        if (this.state.name.length > 3) {
            message = 'ok'
        } else {
            message = 'too short'
        }


        return (
            <div>
                <h2>Time:
                {isSet ? time.toLocaleTimeString() : ' Henlo'}</h2>
                <button onClick={this.change}>
                    {this.state.isSet ? 'True' : 'False'}
                </button>
                <div>
                    <h1>{this.state.name}</h1>
                    <label>Name:
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <p>{message}</p>
                </div>
            </div>
        )
    }
}

export default App;


