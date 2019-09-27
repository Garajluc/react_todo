import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faTimes, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import './TaskList.css'
import EditTask from '../EditTask/EditTask';

class TaskList extends Component {

    //Function 
    handleToggle(taskToToggle, property) {
        this.props.onToggle(taskToToggle, property)
    };

    handleDelete = (taskToDelete) => {
        this.props.onDelete(taskToDelete)
    };

    handleEdit = (editedTask) => {
        this.props.onEdit(editedTask)
    };

    handleOpenDetail = (taskToOpenDetails) => {
        this.props.handleOpenDetails(taskToOpenDetails);
    };

    render() {
        const { tasks } = this.props;
        const todos = [];
        const done = [];

        tasks.forEach((task) => {
            if (task.todo) {
                todos.push(
                    <tr className="row" key={task.key}>
                        {!task.isEdited ?
                            <td className='col-sm-8' onClick={() => this.handleOpenDetail(task)}>{task.title}</td> :
                            <EditTask task={task} handleEditSubmit={this.handleEdit}/>}
                        <td className='col-sm-4 row'>
                            <button className="col checkButton" onClick={() => this.handleToggle(task, "todo")}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button className="col editButton" onClick={() => this.handleToggle(task, "isEdited")}>
                                <FontAwesomeIcon icon={!task.isEdited ? faEdit : faSave} />
                            </button>
                        </td>
                    </tr>
                )
            } else {
                done.push(
                    <tr className="row" key={task.key}>
                        <td className='col-sm-8 doneTask'>{task.title}</td>
                        <td className='col-sm-4 row'>
                            <button className="col timesButton" onClick={() => this.handleToggle(task, "todo")}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <button className="col deleteButton" onClick={() => this.handleDelete(task.key)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </td>
                    </tr>
                )
            }
        })

        // Style
        const noTask = {
            color: 'grey'
        };

        return (
            <tbody>
                {todos.length > 0 ?
                    [todos] :
                    <tr style={noTask}>
                        <td className="emptyMessage">You have nothing to do today</td>
                    </tr>
                }
                <tr>
                    <td><hr /></td>
                </tr>
                {done.length > 0 ?
                    [done] :
                    <tr style={noTask}>
                        <td className="emptyMessage">Do something</td>
                    </tr>
                }
            </tbody>
        )
    }
}

export default TaskList;