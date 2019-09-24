import React, { Component } from 'react';
import './EditTask.css'

class EditTask extends Component {
    constructor() {
        super()
        this.state = {
            title: ""
        }
    }

    handleChange = (e,key) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
            key: key
        }, () => {
            this.props.handleEditSubmit(this.state)
        })
    }

    render() {
        const { task } = this.props;
        return (
            <td className='col-sm-8 edit-task'>
                <input type="text" name="title" defaultValue={task.title} onChange={(e) => this.handleChange(e,task.key)}></input>
            </td>
        )
    }
}

export default EditTask;