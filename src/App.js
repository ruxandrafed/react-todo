import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo} from './lib/todoService';

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  };

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}));
  }

  static contextTypes = {
    route: React.PropTypes.string
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
    createTodo(newTodo)
      .then(() => this.setState({message: 'Todo added'}));
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
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList
            todos={displayTodos}
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
