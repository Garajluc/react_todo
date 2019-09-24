import React, { Component } from 'react';
import './Table.css';
import EditForm from '../Form/EditForm'

class Table extends Component {
    constructor() {
        super()

        this.state = {
            title: ''
        }

        this.handleSave = this.handleSave.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    render() {
        const { handleDelete, handleEdit } = this.props;

        const Theader = () => {
            return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
            )
        }

        const Tbody = (props) => {
            const todos = this.props.todoData.todos.map((todo, index) =>
                <tr key={index}>
                    {todo.isEdited &&
                        <td>
                            <EditForm title={todo.title} handleSave={this.handleSave} handleChange={this.handleChange}/>
                        </td>
                    }
                    {!todo.isEdited &&
                        <td>{todo.title}</td>
                    }
                    <td>
                        <button onClick={() => props.handleDelete(todo.id)}>Delete</button>
                    </td>
                    <td>
                        {!todo.isEdited &&
                            <button onClick={() => props.handleEdit(index)}>Edit</button>
                        }
                        {todo.isEdited &&
                            <div>
                                <button onClick={() => props.handleEdit(index)}>Cancel</button>
                                <button onClick={this.onSave}>Save</button>
                            </div>
                        }
                    </td>
                </tr>
            );
            return <tbody>{todos}</tbody>
        }

        return (
            <table>
                <Theader />
                <Tbody handleDelete={handleDelete} handleEdit={handleEdit} />
            </table>
        )
    }

    handleSave(titleChange) {
        this.newTitle = titleChange;
        console.log(titleChange)
    }

    onSave() {
        this.props.onSave(this.newTitle);
    }
}

export default Table;
