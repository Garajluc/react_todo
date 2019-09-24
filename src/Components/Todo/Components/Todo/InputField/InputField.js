import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './InputField.css'

class InputField extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            key: '',
            todo: true,
            isEdited: false,
            isOpen: false
        }
    }

    handleChange = (e) => {
        const { value } = e.target

        this.setState({
            title: value,
            key: Date.now()
        })
    }

    handleSubmit = () => {
        if (this.state.title.length > 0) {
            this.props.onSubmit(this.state);
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <thead>
                <tr className="row">
                    <td className="col-sm-10">
                        <input className="addInput" type='text' name='tasks' placeholder='Add new task...' value={this.state.title} onChange={this.handleChange} />
                    </td>
                    <td className="col-sm-2 row addButtonContainer">
                        <button className="col addButton" onClick={this.handleSubmit}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
            </thead>
        )
    }
}

export default InputField;