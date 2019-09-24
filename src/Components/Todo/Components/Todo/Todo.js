import React, { Component } from 'react';
import InputField from './InputField/InputField'
import TaskList from './TaskList/TaskList';
import TaskDetails from './TaskDetailes/TaskDetails'

class Todo extends Component {
    constructor() {
        super()
        let myLocalStorage = JSON.parse(localStorage.getItem('tasks'));

        this.state = {
            tasks: localStorage.getItem('tasks') ?
                [...myLocalStorage.tasks] : []
        }
    }

    handleSubmit = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        }, () => {
            localStorage.setItem('tasks', JSON.stringify(this.state))
        })
    }

    handleToggle = (taskToToggle, property) => {
        // Create a copyState of current state
        let tasksCopy = JSON.parse(JSON.stringify(this.state.tasks));
        this.state.tasks.forEach((task, i) => {
            if (task.key === taskToToggle.key) {
                // change the value
                tasksCopy[i][property] = !tasksCopy[i][property];
            }
        })

        // Set the state by copyState
        this.setState({
            tasks: tasksCopy
        }, () => {
            localStorage.setItem('tasks', JSON.stringify(this.state))
        })
    }

    handleDelete = (taskToDelete) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => {
                return task.key !== taskToDelete
            })
        }, () => {
            localStorage.setItem('tasks', JSON.stringify(this.state))
        })
    }

    handleEdit = (editedTask) => {
        // Create a copyState of current state
        let tasksCopy = JSON.parse(JSON.stringify(this.state.tasks));
        this.state.tasks.forEach((task, i) => {
            if (task.key === editedTask.key) {
                // change the value
                tasksCopy[i].title = editedTask.title;
            }
        })

        // Set the state by copyState
        this.setState({
            tasks: tasksCopy
        }, () => {
            localStorage.setItem('tasks', JSON.stringify(this.state))
        })
    }

    handleOpenDetails = (taskToOpenDetails) => {
        console.log('handleOpenDetails inside the Todo.js')
        // let taskDetail = null;

        // this.state.tasks.forEach((task,i) => {
        //     // taskDetail = !task.isOpen ? <TaskDetails /> : null
        //     let detail = taskToOpenDetails.key === task.key ? task : null;
        // })
    }

    render() {
        const { tasks } = this.state;

        return (
            <div>
                <table className='col-sm-10 offset-sm-1 col-lg-6 offset-lg-3'>
                    <InputField onSubmit={this.handleSubmit} />
                    <TaskList tasks={tasks} onToggle={this.handleToggle} onDelete={this.handleDelete} onEdit={this.handleEdit} handleOpenDetails={this.handleOpenDetails} />
                </table>
            </div>
        )
    }
}

export default Todo;