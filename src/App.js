import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table/Table';
import Form from './Components/Form/AddForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Title 1', isEdited: true, id: 1 },
        { title: 'Title 2', isEdited: false, id: 2 },
        { title: 'Title 3', isEdited: true, id: 3 },
        { title: 'Title 4', isEdited: false, id: 4 },
      ]
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  render() {
    return (
      <div>
        <Table todoData={this.state} handleDelete={this.handleDelete} handleEdit={this.handleEdit}  onSave={this.onSave}/>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }

  handleDelete(id) {
    const newTodos = this.state.todos.filter((todo, i) => {
      return todo.id !== id
    })
    this.setState({ todos: [...newTodos] })
  }

  onSubmit(todo) {
    this.setState({ todos: [...this.state.todos, todo] })
  }

  onSave(todoChange) {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, {'title': todoChange.title, 'isEdited': false}]
      }
    })
  }

  handleEdit(id) {
    this.setState((prevState) => ({
      todos: [
        prevState.todos[id].isEdited = !prevState.todos[id].isEdited
      ]
    }))

    this.setState(this.state)
  }

}

export default App;
