import React, { Component } from 'react';

class AddForm extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            isEdited: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div>
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                <input type='submit' value='Submit' onClick={this.handleSubmit} />
            </div>
        )
    }

    handleChange(e) {
        const { name, value } = e.target;

        console.log(value);

        this.setState({
            [name]: value,
        })
    }

    handleSubmit() {
        this.props.onSubmit(this.state);
    }
}

export default AddForm; 