import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return <input type='text' name='title' defaultValue={this.props.title} onChange={this.handleChange} />
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        }, () => {
            this.props.handleSave(this.state)
        })
    }
}

export default EditForm;