import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';

class App extends Component {
  state = {
    todos: [
      {id: 12323, name: 'Learn JsX', isComplete: true},
      {id: 23124, name: 'Build an awesome app', isComplete: false},
      {id: 32412, name: 'Ship it!', isComplete: false}
    ],
    currentTodo: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
  };


  handleEmptySubmit = (event) => {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name!'
    });
  };

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    });
  };

  handleToggle = (id) => {
//    const todo = findById(id, this.state.todos);
//    const toggled = toggleTodo(todo);
//    const updatedTodos = updateTodo(this.state.todos, toggled);
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    this.setState({
      todos: getUpdatedTodos(id, this.state.todos)
    });
  };

  handleRemove = (id, event) => {
    event.preventDefault();
    console.log('before ', this.state.todos);
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
    console.log('after ', updatedTodos);
  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList
            todos={this.state.todos}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
